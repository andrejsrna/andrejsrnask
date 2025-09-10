'use client';

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { useCallback } from "react";

export default function PrintAuditButton() {
  const handlePrint = useCallback(() => {
    try {
      const container = document.getElementById("audit-pdf-content");
      if (!container) {
        window.print();
        return;
      }

      // Open all details to ensure full content is printed
      const details = Array.from(container.querySelectorAll("details")) as HTMLDetailsElement[];
      const initiallyClosed = new WeakSet<HTMLDetailsElement>();
      details.forEach((d) => {
        if (!d.open) {
          initiallyClosed.add(d);
          d.open = true;
        }
      });

      // Avoid breaking key sections across pages
      container
        .querySelectorAll<HTMLElement>(".bg-white.rounded-2xl.p-8.shadow-lg, details")
        .forEach((el) => {
          (el.style as CSSStyleDeclaration & { breakInside?: string }).breakInside = "avoid";
          el.style.pageBreakInside = "avoid";
        });

      const restore = () => {
        details.forEach((d) => {
          if (initiallyClosed.has(d)) d.open = false;
        });
        window.removeEventListener("afterprint", restore);
      };

      window.addEventListener("afterprint", restore, { once: true });

      // Give the layout a tick to reflow with opened details
      setTimeout(() => window.print(), 0);
    } catch {
      window.print();
    }
  }, []);

  return (
    <Button
      size="lg"
      variant="outline"
      className="border-slate-300 px-8 py-4 text-lg"
      onClick={handlePrint}
    >
      Vytlačiť audit
      <Printer className="ml-2 w-5 h-5" />
    </Button>
  );
}


