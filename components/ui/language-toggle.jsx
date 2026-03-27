"use client";

export function LanguageToggle({ isUkr, onToggle }) {
  return (
    <div className="absolute right-4 top-4 z-40 sm:right-6 sm:top-6">
      <div className="flex items-center gap-3 text-xs font-medium text-white/90">
        <span className={!isUkr ? "text-white" : "text-white/55"}>EN</span>

        <button
          type="button"
          role="switch"
          aria-checked={isUkr}
          aria-label="Toggle language"
          onClick={onToggle}
          className={`group relative h-8 w-[3.75rem] rounded-full border p-[3px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_6px_16px_rgba(0,0,0,0.24)] transition-all duration-300 ${
            isUkr
              ? "border-transparent bg-[#0057B7]"
              : "border-white/20 bg-[#212121]"
          }`}
        >
          <span
            className={`block size-6 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.22)] transition-transform duration-300 ease-out ${
              isUkr ? "bg-[#FFD700]" : "bg-white"
            } ${
              isUkr ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>

        <span className={isUkr ? "text-white" : "text-white/55"}>UKR</span>
      </div>
    </div>
  );
}
