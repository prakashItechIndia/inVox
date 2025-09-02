import ClarifiedSvg from "../../assets/icons/Color.svg?react";
import MovedToClientSvg from "../../assets/icons/Column Arrow Right.svg?react";
import DiscardedSvg from "../../assets/icons/Delete.svg?react";
import DueSandClock from "../../assets/icons/duesandclock.svg?react";
import LensSvg from "../../assets/icons/lens.svg?react";
import PdfSvg from "../../assets/icons/pdf.svg?react";
import PendingSvg from "../../assets/icons/pending.svg?react";
import TickSvg from "../../assets/icons/tick.svg?react";
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
