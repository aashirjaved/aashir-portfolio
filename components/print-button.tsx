"use client";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="mono link no-print text-ink">
      Print or save as PDF
    </button>
  );
}
