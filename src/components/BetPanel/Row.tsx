"use client";

import React, { useState } from "react";
import { Select } from "../UI/Select";

const rowCounts = Array.from({ length: 9 }, (_, i) => ({
  label: String(i + 8),
  value: i + 8,
}));

function Row() {
  const [row, setRow] = useState(8);

  return (
    <div>
      <label
        htmlFor="rowCount"
        className="text-[#b1bad3] text-sm font-semibold"
      >
        Rows
      </label>
      <Select
        id="rowCount"
        value={row}
        items={rowCounts}
        onValueChange={setRow}
        disabled={false}
      />
    </div>
  );
}

export default Row;
