import ClarifiedSvg from "../../assets/icons/Color.svg?react";
import MovedToClientSvg from "../../assets/icons/Column Arrow Right.svg?react";
import DiscardedSvg from "../../assets/icons/Delete.svg?react";
import DueSandClock from "../../assets/icons/duesandclock.svg?react";
import LensSvg from "../../assets/icons/lens.svg?react";
import PdfSvg from "../../assets/icons/pdf.svg?react";
import PendingSvg from "../../assets/icons/pending.svg?react";
import TickSvg from "../../assets/icons/tick.svg?react";
import Attachpin from "../../assets/icons/attachpin.svg?react";
import SmilyEmoji from "../../assets/icons/smilyface.svg?react";
import { CustomSVGIconType } from "../../type";

export const ReactInvoiceDueIcon: CustomSVGIconType = ({ className }) => {
  return <DueSandClock className={className} />;
};

export const ReactPdfIcon: CustomSVGIconType = ({ className }) => {
  return <PdfSvg className={className} />;
};

export const ReactLensPdfIcon: CustomSVGIconType = ({ className }) => {
  return <LensSvg className={className} />;
};

export const ReactPendingIcon: CustomSVGIconType = ({ className }) => {
  return <PendingSvg className={className} />;
};

export const ReactTickSvgIcon: CustomSVGIconType = ({ className }) => {
  return <TickSvg className={className} />;
};

export const ReactDiscardedSvgIcon: CustomSVGIconType = ({ className }) => {
  return <DiscardedSvg className={className} />;
};

export const ReactMovedToClientSvgIcon: CustomSVGIconType = ({ className }) => {
  return <MovedToClientSvg className={className} />;
};

export const ReactClarifiedSvgIcon: CustomSVGIconType = ({ className }) => {
  return <ClarifiedSvg className={className} />;
};

export const ArrowDownIcon: CustomSVGIconType = ({
  className = "w-4 h-4 ml-1",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const ArrowUpIcon: CustomSVGIconType = ({
  className = "w-4 h-4 ml-1",
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

export const ReactUploadIcon: CustomSVGIconType = ({
  className = "w-4 h-4",
}) => {
  return <Attachpin className={className} />;
};

export const ReactEmojiIcon: CustomSVGIconType = ({
  className = "w-4 h-4",
}) => {
  return <SmilyEmoji className={className} />;
};
