import React, { useState } from "react";

export function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span className="absolute left-1/2 z-50 mt-2 -translate-x-1/2 rounded bg-gray-700 px-2 py-1 text-xs text-white shadow-lg">
          {content}
        </span>
      )}
    </span>
  );
}
