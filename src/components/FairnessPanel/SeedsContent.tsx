import React from "react";
import CopyableField from "./CopyableField";
import LabeledField from "./LabeledField";

interface SeedsPanelProps {
  clientSeed: string;
  serverSeed: string;
  nonce: number;
}

function SeedsContent({ clientSeed, serverSeed, nonce }: SeedsPanelProps) {
  return (
    <>
      <CopyableField label="Active Client Seed" value={clientSeed} />
      <CopyableField label="Active Server Seed (Hashed)" value={serverSeed} />
      <LabeledField label="Total bets made with pair" value={nonce} />
    </>
  );
}

export default SeedsContent;
