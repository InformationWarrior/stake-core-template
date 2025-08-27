"use client";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import SeedsContent from "./SeedsContent";
import SeedsFooter from "./SeedsFooter";
import VerifyContent from "./VerifyContent";
import VerifyFooter from "./VerifyFooter";

interface FairnessPanelProps {
  toggleFairness: () => void;
}

function FairnessPanel({ toggleFairness }: FairnessPanelProps) {
  const [activeTab, setActiveTab] = useState<"seeds" | "verify">("seeds");

  // Helper for button classnames
  const getTabButtonClass = (tab: string) =>
    `ring-offset-background relative inline-flex flex-1 items-center justify-center gap-2 rounded-full px-[1.25rem] py-[0.9375rem] text-sm leading-none font-semibold whitespace-nowrap transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${
      activeTab === tab
        ? "bg-[var(--bgModeBtn)] text-[var(--bgModeTextSelected)]"
        : "bg-transparent text-[var(--bgModeText)] hover:bg-[var(--bgModeBtnHover)] hover:text-[var(--bgModeTextHover)]"
    }`;

  return (
    <div className="wrapper max-h-[calc(100vh-2rem)] w-full max-w-[480px] overflow-x-hidden overflow-y-auto rounded-lg bg-[var(--bgFairnessPanel)] text-[#e0e5eb]">
      <div className="header flex items-center justify-between p-4">
        <h2 className="title text-lg">⚖️ Fairness</h2>
        <button
          className="close cursor-pointer bg-[var(--bgCloseBtn)] hover:text-[var(--bgCloseBtnHover)]"
          onClick={() => {
            toggleFairness();
          }}
        >
          <FiX size={20} />
        </button>
      </div>
      <div className="tabs px-4">
        <div className="flex overflow-x-auto overflow-y-hidden">
          <div className="slider flex flex-shrink-0 flex-grow-1 rounded-[3rem] bg-[var(--bgModeSelector)] p-[5px]">
            <div className="flex flex-grow-1">
              <button
                className={getTabButtonClass("seeds")}
                onClick={() => setActiveTab("seeds")}
              >
                Seeds
              </button>
              <button
                className={getTabButtonClass("verify")}
                onClick={() => setActiveTab("verify")}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content flex flex-col gap-4 p-4">
        {activeTab === "seeds" && (
          <SeedsContent
            clientSeed={"afdjfhasdlkfgambnvhja"}
            serverSeed={"fadskjfbasjkdhb"}
            nonce={0}
          />
        )}
        {activeTab === "verify" && <VerifyContent />}
      </div>
      <div className="footer flex flex-col gap-4 bg-[var(--bgFairnessFooter)] p-4">
        {activeTab === "seeds" && (
          <SeedsFooter nextServerSeed={"adsfadf"} newClientSeed={"adfad"} />
        )}
        {activeTab === "verify" && <VerifyFooter />}
      </div>
    </div>
  );
}

export default FairnessPanel;
