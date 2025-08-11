"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";



export default function DownloadAuditButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = useCallback(async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const src = document.getElementById("audit-pdf-content");
      if (!src) {
        setIsGenerating(false);
        return;
      }
      const clone = src.cloneNode(true) as HTMLElement;
      clone.querySelectorAll("details").forEach((d) => d.setAttribute("open", "true"));
      clone.querySelectorAll(".shadow-lg").forEach((el) => el.classList.add("no-page-break"));
      // Remove box-shadows to avoid odd stripes on first/last renders
      Array.from(clone.querySelectorAll<HTMLElement>(".shadow, [class*='shadow-']")).forEach(
        (el) => {
          el.style.boxShadow = "none";
        }
      );
      // Force grids to single column for PDF (images on full width, sections stacked)
      Array.from(clone.querySelectorAll<HTMLElement>(".grid")).forEach((grid: HTMLElement) => {
        grid.style.gridTemplateColumns = "1fr";
        grid.style.columnGap = "1.25rem";
        grid.style.rowGap = "1.25rem";
      });

      // Avoid breaking cards/sections across pages
      Array.from(
        clone.querySelectorAll<HTMLElement>(".bg-white.rounded-2xl.p-8.shadow-lg, details")
      ).forEach((el: HTMLElement) => {
        el.style.pageBreakInside = "avoid";
        (el.style as CSSStyleDeclaration & { breakInside?: string }).breakInside = "avoid";
        el.classList.add("avoid-break", "no-page-break");
      });

      // Make images responsive (full width)
      const images = Array.from(clone.querySelectorAll("img")) as HTMLImageElement[];
      images.forEach((img) => {
        try {
          img.loading = "eager";
          img.style.width = "100%";
          img.style.height = "auto";
          img.style.objectFit = "contain";
        } catch {}
      });
      const footer = document.createElement("div");
      footer.className = "mt-8 pt-4 text-center text-slate-600 text-sm";
      footer.textContent = "Audit vypracoval andrejsrna.sk";
      footer.classList.add("force-page-break-before", "avoid-break", "no-page-break");
      (footer.style as CSSStyleDeclaration & { breakInside?: string }).breakInside = "avoid";
      footer.style.pageBreakInside = "avoid";
      clone.appendChild(footer);

      const wrapper = document.createElement("div");
      wrapper.style.position = "absolute";
      wrapper.style.left = "0";
      wrapper.style.top = "0";
      wrapper.style.opacity = "0";
      wrapper.style.pointerEvents = "none";
      wrapper.style.background = "white";
      wrapper.style.padding = "0";
      // Constrain content width for readability
      clone.style.maxWidth = "900px";
      clone.style.margin = "0 auto";
      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      // Wait for images to be ready to avoid blank output
      await Promise.all(
        images.map((img) => {
          const anyImg = img as HTMLImageElement & { decode?: () => Promise<void> };
          if (typeof anyImg.decode === "function") {
            return anyImg.decode().catch(() => undefined);
          }
          if (anyImg.complete) return Promise.resolve();
          return new Promise((resolve) => anyImg.addEventListener("load", resolve, { once: true }));
        })
      );
      // Build pages: each top-level child; if a details node is too tall, split into its inner cards
      const MAX_SECTION_HEIGHT = 6500;
      const MIN_PAGE_HEIGHT = 1200;
      const topLevel = Array.from(clone.children) as HTMLElement[];
      const pageBlocks: HTMLElement[] = [];
      topLevel.forEach((el) => {
        if (el.tagName.toLowerCase() === "details" && el.scrollHeight > MAX_SECTION_HEIGHT) {
          const innerCards = Array.from(
            el.querySelectorAll<HTMLElement>(".bg-white.rounded-2xl.p-8.shadow-lg")
          );
          if (innerCards.length > 0) {
            pageBlocks.push(...innerCards);
            return;
          }
        }
        pageBlocks.push(el);
      });

      // Group blocks so that first/last page are not tiny
      const groups: HTMLElement[][] = [];
      let current: HTMLElement[] = [];
      let currentHeight = 0;
      pageBlocks.forEach((el) => {
        const h = el.scrollHeight || el.getBoundingClientRect().height || 0;
        if (currentHeight + h > MAX_SECTION_HEIGHT && current.length > 0) {
          groups.push(current);
          current = [el];
          currentHeight = h;
        } else {
          current.push(el);
          currentHeight += h;
        }
      });
      if (current.length) groups.push(current);
      if (groups.length > 1) {
        const lastHeight = groups[groups.length - 1].reduce((s, el) => s + (el.scrollHeight || 0), 0);
        if (lastHeight < MIN_PAGE_HEIGHT) {
          const tail = groups.pop()!;
          groups[groups.length - 1].push(...tail);
        }
      }
      if (groups.length > 1) {
        const firstHeight = groups[0].reduce((s, el) => s + (el.scrollHeight || 0), 0);
        if (firstHeight < MIN_PAGE_HEIGHT) {
          const head = groups.shift()!;
          groups[0].unshift(...head);
        }
      }

      const TARGET_WIDTH = 1000; // px
      let doc: import("jspdf").jsPDF | null = null;
      for (let gi = 0; gi < groups.length; gi += 1) {
        const blocks = groups[gi];
        const pageContainer = document.createElement("div");
        pageContainer.style.width = `${TARGET_WIDTH}px`;
        pageContainer.style.maxWidth = `${TARGET_WIDTH}px`;
        pageContainer.style.margin = "0 auto";
        pageContainer.style.padding = "16px 0";
        pageContainer.style.background = "#ffffff";
        blocks.forEach((el) => {
          const node = el.cloneNode(true) as HTMLElement;
          pageContainer.appendChild(node);
        });

        const sandbox = document.createElement("div");
        sandbox.style.position = "absolute";
        sandbox.style.left = "0";
        sandbox.style.top = "0";
        sandbox.style.opacity = "0";
        sandbox.style.pointerEvents = "none";
        sandbox.style.background = "white";
        sandbox.appendChild(pageContainer);
        document.body.appendChild(sandbox);
        // eslint-disable-next-line no-await-in-loop
        await new Promise((r) => setTimeout(r, 0));
        // eslint-disable-next-line no-await-in-loop
        const canvas = await html2canvas(pageContainer, {
          scale: 1,
          useCORS: true,
          backgroundColor: "#ffffff",
          scrollY: 0,
        });
        const imgData = canvas.toDataURL("image/jpeg", 0.92);
        const width = canvas.width;
        const height = canvas.height;
        if (!doc) {
          doc = new jsPDF({ unit: "px", format: [width, height], orientation: "portrait" });
        } else {
          doc.addPage([width, height], "portrait");
        }
        doc.addImage(imgData, "JPEG", 0, 0, width, height);
        document.body.removeChild(sandbox);
      }
      if (doc) {
        doc.save("audit-rimi.pdf");
      }
      document.body.removeChild(wrapper);
    } finally {
      setIsGenerating(false);
    }
  }, [isGenerating]);

  return (
    <Button
      size="lg"
      className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg"
      onClick={handleDownload}
      disabled={isGenerating}
    >
      {isGenerating ? "Generujem PDF…" : "Stiahnuť kompletný audit"}
      <ArrowRight className="ml-2 w-5 h-5" />
    </Button>
  );
}


