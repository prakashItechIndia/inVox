import CustomPDFViewer from "@/components/CustomPDFViewer";
import { PdfPageDemo } from "@/pages/pdfpage";
import { observer } from "mobx-react-lite";
import samplePdf from "../../../assets/invoice-sample.pdf";

export const Indexing = observer(function Indexing() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2 h-[700px]">
        <CustomPDFViewer fileUrl={samplePdf} />
        {/* <iframe src={samplePdf} width="100%" height="600px" /> */}
      </div>
      <div className="col-span-1"><PdfPageDemo/></div>
    </div>
  );
});
