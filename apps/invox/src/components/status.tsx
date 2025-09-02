import {
  ReactClarifiedSvgIcon,
  ReactDiscardedSvgIcon,
  ReactLensPdfIcon,
  ReactMovedToClientSvgIcon,
  ReactPendingIcon,
  ReactTickSvgIcon
} from "@shared/components/icons/invoice";

export interface Props {
  status: string | undefined | null;
}

export const StatusIcons = (props: Props) => {
  const { status } = props;

  if (status && status.toLowerCase().includes("pending")) {
    return <ReactPendingIcon />;
  } else if (status && status.toLowerCase().includes("shipped")) {
    return <ReactTickSvgIcon />;
  } else if (status && status.toLowerCase().includes("verify")) {
    return <ReactLensPdfIcon />;
  } else if (status && status.toLowerCase().includes("indexing")) {
    return <ReactLensPdfIcon />;
  } else if (status && status.toLowerCase().includes("discarded")) {
    return <ReactDiscardedSvgIcon />;
  } else if (status && status.toLowerCase().includes("movedtoclient")) {
    return <ReactMovedToClientSvgIcon />;
  } else if (status && status.toLowerCase().includes("clarified")) {
    return <ReactClarifiedSvgIcon />;
  }
}