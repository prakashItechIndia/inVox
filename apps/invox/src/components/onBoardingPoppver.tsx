import { useEffect, useState } from "react";

interface Props {
  targetRef: React.RefObject<HTMLElement>;
  message: string;
  onNext: () => void;
  isLastStep: boolean;
}

export default function OnboardingPopover({
  targetRef,
  message,
  onNext,
  isLastStep,
}: Props) {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    placement: "bottom",
    arrowLeft: 0,
  });

  useEffect(() => {
    if (!targetRef.current) return;

    const rect = targetRef.current.getBoundingClientRect();
    const popoverWidth = 256;
    const popoverHeight = 120;
    const arrowSize = 12;
    const margin = 12;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = rect.bottom + margin;
    let left = rect.left;
    let placement = "bottom";

    if (top + popoverHeight > viewportHeight - margin) {
      top = rect.top - popoverHeight - margin;
      placement = "top";
    }

    left = rect.left + rect.width / 2 - popoverWidth / 2;

    if (left < margin) {
      left = margin;
    }

    if (left + popoverWidth > viewportWidth - margin) {
      left = viewportWidth - popoverWidth - margin;
    }

    const arrowLeft = rect.left + rect.width / 2 - left - arrowSize / 2;

    setPosition({ top, left, placement, arrowLeft });
  }, [targetRef]);

  return (
    <div
      className="absolute z-50 w-64 p-4 text-sm bg-white border border-gray-300 shadow-md rounded-md pointer-events-auto"
      style={{ top: position.top, left: position.left }}
    >
      {/* Arrow */}
      <div
        className={`absolute w-3 h-3 rotate-45 bg-white z-[-1] ${
          position.placement === "bottom"
            ? "border-t border-l -top-1.5"
            : "border-b border-r -bottom-1.5"
        } border-gray-300`}
        style={{ left: `${position.arrowLeft}px` }}
      ></div>

      {/* Message */}
      <p>{message}</p>

      {/* Button */}
      <div className="mt-3 text-right">
        <button
          className="px-3 py-1 text-xs text-white bg-green-500 rounded hover:bg-green-600"
          onClick={onNext}
        >
          {isLastStep ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
