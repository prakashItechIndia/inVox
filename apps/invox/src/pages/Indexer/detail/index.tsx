import CustomPDFViewer from "@/components/CustomPDFViewer";
import { InvoiceHeader } from "@/components/invoiceHeader";
import { observer } from "mobx-react-lite";
import { CurrentUserRole } from "shared";
import samplePdf from "../../../assets/invoice-sample.pdf";
import { PdfDetailView } from "./chatAndTableView";

export const InvoiceDetail = observer(function InvoiceDetail() {
  const detailViewType = CurrentUserRole

  const typeFunction = () => {
    if (detailViewType === "indexer") {
      return "";
    } else if (detailViewType === "verifier") {
      return "table";
    } else if (detailViewType === "clarifier") {
      return "chat";
    } else if (detailViewType === "organisationAdmin") {
      return "table";
    } else {
      return "";
    }
  };

  return (
   <div>
      <InvoiceHeader title='title'/>
     <div className="grid grid-cols-12 gap-4 p-8 bg-white">
      <div className="col-span-7 h-full">
        <CustomPDFViewer fileUrl={samplePdf} />
      </div>
      <div className="col-span-5 h-full overflow-auto px-4">
        <PdfDetailView 
        // type={typeFunction()} 
        
        type='chat'/>
      </div>
    </div>
   </div>
  );
});
