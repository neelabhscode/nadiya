"use client";

import { useState } from "react";

export function GridTool({ label = "Grid" }) {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <>
      {showGrid ? (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]">
          <div
            className="mx-5 hidden h-full md:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(17,24,39,0.14) 0, rgba(17,24,39,0.14) calc((100% - 11 * 24px) / 12), transparent calc((100% - 11 * 24px) / 12), transparent calc(((100% - 11 * 24px) / 12) + 24px))",
            }}
          />
          <div
            className="mx-4 h-full md:hidden"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(17,24,39,0.14) 0, rgba(17,24,39,0.14) calc((100% - 3 * 16px) / 4), transparent calc((100% - 3 * 16px) / 4), transparent calc(((100% - 3 * 16px) / 4) + 16px))",
            }}
          />
        </div>
      ) : null}

      <div className="fixed bottom-4 right-4 z-[70] rounded-full border border-stone-200 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm">
        <button
          type="button"
          role="switch"
          aria-checked={showGrid}
          onClick={() => setShowGrid((current) => !current)}
          className="flex items-center gap-3 text-sm text-stone-700"
        >
          <span>{label}</span>
          <span
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              showGrid ? "bg-stone-950" : "bg-stone-300"
            }`}
          >
            <span
              className={`inline-block size-4 transform rounded-full bg-white transition-transform ${
                showGrid ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </span>
        </button>
      </div>
    </>
  );
}
