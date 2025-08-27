import React from "react";

function VerifyContent() {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border-2 border-dotted border-[#1acb5e] p-4 text-left">
      <div className="flex flex-col items-center gap-4 text-center">
        <h6 className="text-sm text-slate-300">
          More inputs are required to verify results
        </h6>
      </div>
    </div>
  );
}

export default VerifyContent;
