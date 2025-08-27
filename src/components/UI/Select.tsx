import React from "react";
import { ChevronDown } from "lucide-react";

type SelectOption<T> = { value: T; label: string };

type SelectProps<T extends string | number> = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "value" | "onChange"
> & {
  value: T;
  items: SelectOption<T>[];
  onValueChange: (value: T) => void;
};

export function Select<T extends string | number>({
  value,
  items,
  onValueChange,
  ...props
}: SelectProps<T>) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onValueChange(items[e.target.selectedIndex].value)}
        className="block w-full appearance-none rounded-md border-2 border-[var(--bgBoxBorder)] bg-[var(--bgBox)] py-2 pr-8 pl-3 text-sm text-[var(--bgBoxColor)] transition hover:cursor-pointer hover:not-disabled:border-[var(--bgBoxBorderHover)] focus:border-[var(--bgBoxBorder)] focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      >
        {items.map(({ value, label }) => (
          <option key={String(value)} value={value}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-3 right-3 text-[var(--bgBoxColor)]"
        size={16}
      />
    </div>
  );
}
