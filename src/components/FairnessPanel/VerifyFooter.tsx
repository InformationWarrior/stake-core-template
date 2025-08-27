import React from "react";
import LabeledInput from "./LabeledInput";
import NumberSpinner from "./NumberSpinner";
import MinesSelect from "../BetPanel/MinesSelect";

function VerifyFooter() {
  return (
    <>
      <LabeledInput label="Client Seed" value={"dfafadsf"} />
      <LabeledInput label="Server Seed" value={"adsfdas"} />
      <NumberSpinner />
      <MinesSelect label="Mines" />
      <button className="mt-2 cursor-pointer rounded border-none bg-[var(--bgFairnessBtn)] px-6 py-2.5 font-semibold text-[var(--bgFairnessBtnColor)] hover:active:bg-[var(--bgFairnessBtnHover)]">
        View Calculation Breakdown
      </button>
    </>
  );
}

export default VerifyFooter;
