import React from "react";

interface RotateSeedProps {
  newClientSeed: string;
}

function RotateSeed({ newClientSeed }: RotateSeedProps) {
  const isDisabled = !newClientSeed.trim();

  return (
    <div className="flex w-full flex-col gap-1">
      <label className="mb-1 block text-[0.875rem] font-semibold text-[var(--bgFairnessLabelColor)]">
        New Client Seed
      </label>

      <div className="flex w-full flex-shrink-0 rounded-sm bg-[var(--bgBox)] shadow">
        <input
          type="text"
          placeholder="Enter new seed"
          value={newClientSeed}
          readOnly
          className="min-w-0 flex-1 cursor-text rounded-l-sm border-none p-2 text-[0.875rem] font-semibold text-[var(--bgChangeInputText)] shadow-none outline-none"
        />

        <button
          type="button"
          disabled={isDisabled}
          className={`shrink-0 rounded-r-sm px-3 py-2 font-semibold transition ${
            isDisabled
              ? "cursor-not-allowed bg-[var(--bgChangeBtnDisabled)] text-[var(--bgBoxBtnText)]"
              : "cursor-pointer bg-[var(--bgChangeBtn)] text-[var(--bgBoxBtnText)] hover:active:bg-[var(--bgChangeBtnHover)]"
          }`}
        >
          Change
        </button>
      </div>
    </div>
  );
}

export default RotateSeed;
