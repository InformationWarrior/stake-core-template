import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

interface CopyableFieldProps {
  label?: string;
  value: string;
}

function CopyableField({ label, value }: CopyableFieldProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 1500);
  }

  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label className="mb-1 block text-[0.875rem] font-semibold text-[var(--bgFairnessLabelColor)]">
          {label}
        </label>
      )}

      <div className="flex w-full flex-shrink-0 rounded-sm border-2 border-[var(--bgBoxBorder)] bg-[var(--bgBox)] shadow hover:border-[var(--bgBoxBorderHover)]">
        <input
          className="min-w-0 flex-1 cursor-text rounded-l-sm border-none p-2 text-[0.75rem] font-semibold text-[var(--bgBoxColor)] shadow-none outline-none"
          type="text"
          readOnly
          value={value}
        />
        <button
          type="button"
          onClick={handleCopy}
          data-tooltip-id="tooltip"
          data-tooltip-content="Copied!"
          className="flex shrink-0 items-center justify-center rounded-r-sm bg-[var(--bgBoxBtn)] px-3 py-2 text-[var(--bgBoxBtnText)] transition hover:bg-[var(--bgBoxBtnHover)] active:bg-[var(--bgBoxBtnActive)]"
        >
          <FiCopy />
        </button>
      </div>

      <Tooltip id="tooltip" isOpen={showTooltip} place="top" />
    </div>
  );
}

export default CopyableField;
