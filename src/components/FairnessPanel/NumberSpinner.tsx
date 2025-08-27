import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function NumberSpinner() {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="mb-1 block text-[0.875rem] font-semibold text-[var(--bgFairnessLabelColor)]">
        Nonce
      </label>

      <div className="flex h-10 w-full flex-shrink-0 rounded-sm bg-[var(--bgBox)] shadow">
        <input
          className="h-full min-w-0 flex-1 cursor-text rounded-l-sm border-none px-3 py-2 text-[0.875rem] font-semibold text-[var(--bgChangeInputText)] shadow-none outline-none"
          type="number"
          defaultValue={0}
        />

        {/* BUTTONS: fixed width, never shrink */}
        <div className="flex h-full w-20 shrink-0">
          <button
            className="flex flex-1 items-center justify-center bg-[var(--bgBoxBtn)] text-base text-[var(--bgBoxBtnText)] transition hover:bg-[var(--bgBoxBtnHover)] active:bg-[var(--bgBoxBtnActive)]"
            aria-label="Decrease"
            tabIndex={-1}
            type="button"
          >
            <FiChevronDown />
          </button>
          <button
            className="relative flex flex-1 items-center justify-center rounded-r-sm bg-[var(--bgBoxBtn)] text-base text-[var(--bgBoxBtnText)] transition after:absolute after:left-0 after:inline-block after:h-1/2 after:w-[2px] after:bg-slate-800 after:content-[''] hover:bg-[var(--bgBoxBtnHover)] active:bg-[var(--bgBoxBtnActive)]"
            aria-label="Increase"
            tabIndex={-1}
            type="button"
          >
            <FiChevronUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NumberSpinner;
