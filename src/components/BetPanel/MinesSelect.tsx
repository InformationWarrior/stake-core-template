"use client";
import React, { useState } from "react";
import { Select } from "../UI/Select";

interface MinesSelectProps {
  label: string;
}

function MinesSelect({ label }: MinesSelectProps) {
  const mineOptions = Array.from({ length: 24 }, (_, i) => ({
    label: String(i + 1),
    value: i + 1,
  }));

  const [mines, setMines] = useState(3);

  return (
    <div className="mineSelect">
      <label
        htmlFor="mines-count"
        className="text-sm font-semibold text-[var(--bgBoxLabel)]"
      >
        {label}
      </label>
      <Select
        id="mines-count"
        value={mines}
        items={mineOptions}
        onValueChange={setMines}
      />
    </div>
  );
}

export default MinesSelect;
