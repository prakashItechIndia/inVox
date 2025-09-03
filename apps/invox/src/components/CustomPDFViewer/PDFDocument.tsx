/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';

import PDFViewer from './PDFViewer';

export const PDFDocument: React.FC<any> = ({ fileUrl, jumpIndex, updateSearchPage }) => {
  return <PDFViewer fileUrl={fileUrl} jumpIndex={jumpIndex} updateSearchPage={updateSearchPage} />;
};

export default PDFDocument;
