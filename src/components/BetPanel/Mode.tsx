"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { BetMode } from "@/types/template";
import { setMode } from "@/redux/slices/templateSlice";

function Mode() {
  const dispatch = useAppDispatch();
  const modes: { value: BetMode; label: string }[] = [
    { value: BetMode.MANUAL, label: "Manual" },
    { value: BetMode.AUTO, label: "Auto" },
  ];

  const betMode = useAppSelector((state) => state.template.mode);

  return (
    <div className="mode flex gap-1 rounded-full bg-[var(--bgModeSelector)] p-1">
      {modes.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => dispatch(setMode(value))}
          className={twMerge(
            "hover:not-disabled:bg-[var(--bgModeBtnHover)]active:not-disabled:bg-[var(--bgModeBtn)] flex-1 rounded-full py-3 text-xl font-semibold text-[var(--bgModeText)] transition outline-none hover:text-[var(--bgModeTextHover)] disabled:cursor-not-allowed disabled:text-[#747474] disabled:opacity-50",
            betMode === value &&
              "bg-[var(--bgModeBtn)] text-[var(--bgModeTextSelected)]"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Mode;
