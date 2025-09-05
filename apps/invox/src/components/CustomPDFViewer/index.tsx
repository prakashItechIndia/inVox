import React from "react";
import PDFViewer from "./PDFViewer";

interface PDFViewerProps {
  fileUrl?: string;
  updateSearchPage?: (pageNumber: number) => void;
  jumpIndex?: number;
}

export const CustomPDFViewer: React.FC<PDFViewerProps> = ({
  fileUrl,
  updateSearchPage,
  jumpIndex,
}) => {
  return (
    <PDFViewer
      fileUrl={fileUrl ?? ""}
      jumpIndex={jumpIndex}
      updateSearchPage={updateSearchPage}
    />
  );
};

export default React.memo(CustomPDFViewer);
