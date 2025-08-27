import React, { useRef } from "react";
import Draggable from "react-draggable";
import { X as CloseIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export interface DraggableWindowProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  titleBarActions?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  children?: React.ReactNode;
  initialPosition?: { x: number; y: number };
}

export function DraggableWindow({
  title,
  titleBarActions,
  onClose,
  className,
  children,
  initialPosition = { x: 0, y: 0 },
  ...props
}: DraggableWindowProps) {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".draggable-window-title"
      bounds="body"
      defaultPosition={initialPosition}
    >
      <div
        ref={nodeRef}
        className={twMerge(
          "z-40 w-[15rem] rounded-md bg-slate-600 drop-shadow-lg fixed",
          className
        )}
        {...props}
      >
        {/* Title Bar */}
        <div className="flex">
          <div className="draggable-window-title flex flex-1 cursor-move items-center gap-2 bg-slate-800 px-4 py-2">
            {title}
          </div>
          <div className="ml-auto flex items-center">
            {titleBarActions}
            <button
              onClick={onClose}
              className="bg-slate-800 px-5 py-3 text-slate-300 transition hover:bg-red-600 hover:text-white active:bg-red-700 active:text-white"
              tabIndex={0}
              aria-label="Close"
            >
              <CloseIcon size={20} />
            </button>
          </div>
        </div>
        {/* Content */}
        <div className="p-4">{children}</div>
      </div>
    </Draggable>
  );
}
