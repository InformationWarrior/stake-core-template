import React from "react";

interface LabeledFieldProps {
  label: string;
  value: number;
}

function LabeledField({ label, value }: LabeledFieldProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label className="mb-1 block text-[0.875rem] font-semibold text-[var(--bgFairnessLabelColor)]">
          {label}
        </label>
      )}

      <div className="flex w-full flex-shrink-0 rounded-sm border-2 border-[var(--bgBoxBorder)] bg-[var(--bgBox)] shadow hover:border-[var(--bgBoxBorderHover)]">
        <input
          className="flex-1 cursor-text rounded-l-sm border-none p-2 text-[0.75rem] font-semibold text-[var(--bgBoxColor)] shadow-none outline-none"
          type="text"
          readOnly
          value={value}
        />
      </div>
    </div>
  );
}

export default LabeledField;
