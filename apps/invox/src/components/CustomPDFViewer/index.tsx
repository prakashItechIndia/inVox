/* eslint-disable @typescript-eslint/restrict-template-expressions */
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

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
