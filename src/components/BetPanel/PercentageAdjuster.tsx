import React, { useState, ChangeEvent } from "react";
import { TbPercentage } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

interface PercentageAdjusterProps {
  label: string;
  onChange?: (v: number) => void;
  onReset?: () => void;
}

function getBtnClass(isActive: boolean) {
  return twMerge(
    "relative inline-flex items-center justify-center gap-2 rounded-sm font-semibold text-xs leading-none px-[0.75rem] py-[0.75rem] transition whitespace-nowrap select-none outline-none border-none cursor-pointer",
    isActive
      ? "bg-[var(--bgActive)] text-[var(--bgActiveText)] shadow-md"
      : "bg-[var(--bgInactive)] text-[var(--bgInactiveText)] hover:bg-[var(--bgActive)] hover:text-white shadow-none hover:shadow"
  );
}

export default function PercentageAdjuster({
  label,
  onChange,
  onReset,
}: PercentageAdjusterProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(0);

  const handleIncreaseClick = () => setIsEditing(true);

  const handleResetClick = () => {
    setIsEditing(false);
    setInputValue(0);
    onReset?.();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.target.value);
    if (isNaN(v)) {
      setInputValue(0);
      onChange?.(0);
    } else {
      setInputValue(v);
      onChange?.(v);
    }
  };

  const inputDisabled = !isEditing;

  return (
    <div className="percentage-adjuster">
      <div className="label mb-1 flex items-center justify-between text-sm font-semibold text-[var(--bgBoxLabel)]">
        <label>{label}</label>
      </div>
      <div className="content inline-flex w-full shadow-md">
        <div className="buttons inline-flex rounded-sm border-1 border-[var(--bgBoxBorder)] whitespace-nowrap">
          <button
            className={getBtnClass(!isEditing)}
            type="button"
            onClick={handleResetClick}
            tabIndex={0}
          >
            Reset
          </button>
          <button
            className={getBtnClass(isEditing)}
            type="button"
            onClick={handleIncreaseClick}
            tabIndex={0}
            disabled={isEditing}
          >
            Increase by:
          </button>
        </div>
        <div className="input-content relative flex w-full flex-1 flex-grow">
          <input
            type="text"
            min={0}
            max={100}
            value={inputValue}
            disabled={inputDisabled}
            className={twMerge(
              "w-full rounded-sm border-2 border-[var(--bgBoxBorder)] bg-[var(--bgInput)] pr-6 pl-2 text-[var(--bgBoxColor)] outline-none",
              "[&:hover]:border-[var(--bgBoxBorderHover)]",
              inputDisabled && "cursor-not-allowed opacity-50"
            )}
            onChange={handleInputChange}
          />

          <span className="after-icon pointer-events-none absolute top-1/2 right-1 z-2 flex -translate-y-1/2 text-[var(--bgBoxColor)]">
            <TbPercentage size={20} />
          </span>
        </div>
      </div>
    </div>
  );
}
