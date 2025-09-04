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
import ReactRotateIcons from "../../assets/icons/rotate.svg?react";
import ReactPresentationIcons from "../../assets/icons/presentation.svg?react";
import ReactClarifyChatIcons from "../../assets/icons/cil_chat.svg?react";
import ReactChatShareIcons from "../../assets/icons/Container (2).svg?react";
import ReactSkipIcons from "../../assets/icons/dotted_loading.svg?react";

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

export const ReactDiscardedSvgIcon: CustomSVGIconType = ({
  className,
  color,
}) => {
  return (
    <DiscardedSvg className={className} style={{ color: color, fill: color }} />
  );
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

export const ReactRotateIcon: CustomSVGIconType = ({
  className = "w-6 h-6",
}) => {
  return <ReactRotateIcons className={className} />;
};

export const ReactPresentationIcon: CustomSVGIconType = ({
  className = "w-6 h-6",
}) => {
  return <ReactPresentationIcons className={className} />;
};

export const ReactClarifyChatIcon: CustomSVGIconType = ({
  className = "w-6 h-6",
}) => {
  return <ReactClarifyChatIcons className={className} />;
};

export const ReactChatShareIcon: CustomSVGIconType = ({
  className = "w-6 h-6",
}) => {
  return <ReactChatShareIcons className={className} />;
};

export const ReactSkipIcon: CustomSVGIconType = ({ className = "w-6 h-6" }) => {
  return <ReactSkipIcons className={className} />;
};
