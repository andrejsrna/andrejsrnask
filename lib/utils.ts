import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Dekóduje HTML entity do ich textových ekvivalentov
 * @param text - Text obsahujúci HTML entity
 * @returns Dekódovaný text
 */
export function decodeHtmlEntities(text: string): string {
  // Najčastejšie HTML entity
  const entities: Record<string, string> = {
    '&#8211;': '\u2013', // en dash
    '&#8212;': '\u2014', // em dash
    '&#8216;': '\u2018', // left single quotation mark
    '&#8217;': '\u2019', // right single quotation mark
    '&#8218;': '\u201A', // single low-9 quotation mark
    '&#8220;': '\u201C', // left double quotation mark
    '&#8221;': '\u201D', // right double quotation mark
    '&#8222;': '\u201E', // double low-9 quotation mark
    '&#8230;': '\u2026', // horizontal ellipsis
    '&#8249;': '\u2039', // left single angle quotation mark
    '&#8250;': '\u203A', // right single angle quotation mark
    '&#160;': '\u00A0',  // non-breaking space
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'",
    '&nbsp;': ' '
  };

  let decodedText = text;
  
  // Nahradí named entities
  Object.entries(entities).forEach(([entity, replacement]) => {
    decodedText = decodedText.replace(new RegExp(entity, 'g'), replacement);
  });

  // Nahradí numeric entities (&#123;)
  decodedText = decodedText.replace(/&#(\d+);/g, (match, num) => {
    return String.fromCharCode(parseInt(num, 10));
  });

  // Nahradí hex entities (&#x1A;)
  decodedText = decodedText.replace(/&#x([0-9A-Fa-f]+);/g, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });

  return decodedText;
}
