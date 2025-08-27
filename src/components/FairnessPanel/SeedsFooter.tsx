import React from "react";
import CopyableField from "./CopyableField";
import RotateSeed from "./RotateSeed";

interface SeedsFooterProps {
  nextServerSeed: string;
  newClientSeed: string;
}

function SeedsFooter({
  nextServerSeed,
  newClientSeed,
}: SeedsFooterProps) {
  return (
    <>
      <h1 className="inline-flex items-center justify-center text-center text-lg font-semibold text-white">
        Rotate Seed Pair
      </h1>
      <RotateSeed
        newClientSeed={newClientSeed}
      />
      <CopyableField label="Next Server Seed (Hashed)" value={nextServerSeed} />
    </>
  );
}

export default SeedsFooter;
