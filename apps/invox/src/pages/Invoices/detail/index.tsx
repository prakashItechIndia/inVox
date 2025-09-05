import CustomPDFViewer from "@/components/CustomPDFViewer";
import { InvoiceHeader } from "@/components/invoiceHeader";
import {
  ReactClarifyChatIcon,
  ReactDiscardedSvgIcon,
  ReactSkipIcon,
} from "@shared/components/icons/invoice";
import { useLanguageTranslation } from "@shared/hooks/ui/useLanguageTranslation";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import samplePdf from "../../../assets/invoice-sample.pdf";
import { PdfDetailView } from "./chatAndTableView";
import { ClarifyPoppover } from "./clarifyPoppover";

export const InvoiceDetail = observer(function InvoiceDetail() {
  const { t } = useLanguageTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isClarify, setClarify] = useState(false);
  const [isReject, setReject] = useState(false);
  const [isSkip, setSkip] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleOpenAndClose = () => {
    setClarify(!isClarify);
  };

  const handleOpenAndCloseReject = () => {
    setReject(!isReject);
  };

  const handleOpenAndCloseSkip = () => {
    setSkip(!isSkip);
  };

  return (
    <div className="px-8 bg-white">
      <InvoiceHeader
        handleBack={handleBack}
        title="Billing Statement 1/26"
        type={location?.state?.type ?? ""}
        onClickClarify={handleOpenAndClose}
        onClickReject={handleOpenAndCloseReject}
        onClickSkip={handleOpenAndCloseSkip}
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <CustomPDFViewer fileUrl={samplePdf} />
        </div>
        <div className="col-span-5 h-full overflow-auto !pl-6">
          <PdfDetailView
            type={location?.state?.type ?? ""}
            // type="chat"
            submitText={"Submit"}
            cancelText={"Move to Client"}
          />
        </div>
      </div>

      {isReject && (
        <ClarifyPoppover
          title={t("CLARIFIER.REJECT_ADD.TITLE")}
          description={t("CLARIFIER.REJECT_ADD.DESCRIPTION")}
          saveText={t("CLARIFIER.REJECT_ADD.SAVE_ACTION")}
          selectQueryTitle={t("CLARIFIER.REJECT_ADD.SELECT_QUERY")}
          onSuccess={() => {
            handleOpenAndCloseReject();
          }}
          open={isReject}
          onClose={() => {
            handleOpenAndCloseReject();
          }}
          icon={<ReactDiscardedSvgIcon className="w-6 h-6" />}
        />
      )}

      {isClarify && (
        <ClarifyPoppover
          title={t("CLARIFIER.CLARIFICATION_ADD.TITLE")}
          description={t("CLARIFIER.CLARIFICATION_ADD.DESCRIPTION")}
          saveText={t("CLARIFIER.CLARIFICATION_ADD.SAVE_ACTION")}
          selectQueryTitle={t("CLARIFIER.CLARIFICATION_ADD.SELECT_QUERY")}
          onSuccess={() => {
            handleOpenAndClose();
          }}
          open={isClarify}
          onClose={() => {
            handleOpenAndClose();
          }}
          icon={<ReactClarifyChatIcon />}
        />
      )}

      {isSkip && (
        <ClarifyPoppover
          title={t("CLARIFIER.SKIP_ADD.TITLE")}
          description={t("CLARIFIER.SKIP_ADD.DESCRIPTION")}
          saveText={t("CLARIFIER.SKIP_ADD.SAVE_ACTION")}
          selectQueryTitle={t("CLARIFIER.SKIP_ADD.SELECT_QUERY")}
          onSuccess={() => {
            handleOpenAndCloseSkip();
          }}
          open={isSkip}
          onClose={() => {
            handleOpenAndCloseSkip();
          }}
          icon={<ReactSkipIcon />}
        />
      )}
    </div>
  );
});
