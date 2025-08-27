"use client";

import React, { useState } from "react";
import { Select } from "../UI/Select";

function Risk() {
  const riskLevels = [
    { label: "Low", value: "LOW" },
    { label: "Medium", value: "MEDIUM" },
    { label: "High", value: "HIGH" },
  ];
  const [riskLevel, setRiskLevel] = useState("LOW");
  return (
    <div>
      <label
        htmlFor="riskLevel"
        className="text-[#b1bad3] text-sm font-semibold"
      >
        Risk
      </label>
      <Select
        id="riskLevel"
        value={riskLevel}
        items={riskLevels}
        onValueChange={setRiskLevel}
        disabled={false}
      />
    </div>
  );
}

export default Risk;
