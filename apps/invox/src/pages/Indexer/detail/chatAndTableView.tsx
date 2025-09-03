import { PageTitle } from "@/components";
import {
    ReactEmojiIcon,
    ReactUploadIcon,
} from "@shared/components/icons/invoice";
import { Button } from "@shared/components/ui/button";
import { observer } from "mobx-react-lite";
import ActivityListSingleFile from "./chatCard";

const LabelRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-x-16 py-1 !p-3 border border-[#E0E0E0] shadow-custom rounded-md">
    <span className="text-md text-blackTextColor">{label}</span>
    <span className="text-md font-semibold text-blackTextColor">{value}</span>
  </div>
);

const InvoiceTable = () => (
  <table className="w-full !rounded-lg overflow-hidden">
    <thead className="bg-HighlightLightGray border border-[#E0E0E0]">
      <tr>
        {["Description", "Quantity", "Unit Price ($)", "Amount ($)"].map(
          (col, i) => (
            <th
              key={i}
              className={`text-${i === 0 ? "left" : "right"} text-md font-semibold text-blackDark py-1.5 px-2`}
            >
              {col}
            </th>
          )
        )}
      </tr>
    </thead>
    <tbody>
      {[...Array(2)].map((_, i) => (
        <tr key={i}>
          <td className="text-left border border-[#E0E0E0] py-1.5 px-2">
            <div className="flex flex-col">
              <span className="text-md font-semibold text-blackDark">
                Sample service
              </span>
              <span className="text-sm text-blackDark mt-1">
                Sample wood decoration service
              </span>
            </div>
          </td>
          {["1", "400.00", "400.00"].map((val, j) => (
            <td
              key={j}
              className="text-right border border-[#E0E0E0] py-1.5 px-2 text-md font-semibold text-blackDark"
            >
              {val}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const TotalSummaryTable = () => (
  <div className="mt-2.5 rounded border border-[#E0E0E0] overflow-hidden">
    <table className="w-full border-collapse">
      <tbody>
        {[
          { label: "TOTAL (GBP)", value: "600.00" },
          { label: "TOTAL DUE (GBP)", value: "600.00" },
        ].map((row, i) => (
          <tr key={i} className={`${i > 0 ? "border-t border-[#E0E0E0]" : ""}`}>
            <td className="text-left text-md font-semibold text-blackDark py-1.5 px-2">
              {row.label}
            </td>
            <td className="text-right text-md font-semibold text-blackDark py-1.5 px-2 border-l border-[#E0E0E0]">
              {row.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FeedbackInputSection = () => (
  <div className="flex flex-col gap-3 rounded-lg bg-[#F5F5F5] m-4 p-4">
    <textarea
      placeholder="Add your feedback notes or comments here..."
      className="w-full resize-y bg-transparent border-0 focus:outline-none focus:ring-0 text-base leading-6 placeholder-gray-500"
    />

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Button variant={"outline"} className="p-2" size={"empty"}>
          <ReactUploadIcon />
        </Button>
        <Button variant={"outline"} className="p-2" size={"empty"}>
          <ReactEmojiIcon />
        </Button>
      </div>

      <div className="flex items-center gap-1">
        <Button className="!p-2" size={"empty"}>
          Discard
        </Button>
        <Button className="!p-2" size={"empty"}>
          Submit
        </Button>
      </div>
    </div>
  </div>
);

export const PdfDetailView = observer(function PdfDetailView({
  type,
}: {
  type: string;
}) {
  return (
    <div>
      {type === "table" && (
        <div className="h-[40rem] flex flex-col">
          {/* Top section */}
            <PageTitle className="text-2xl py-2" title="Labels" />
            <div className="flex flex-col mt-5 gap-2.5">
              {[...Array(6)].map((_, i) => (
                <LabelRow key={i} label="Vendor" value="Ellington Wood Decor" />
              ))}
            </div>

          {/* Bottom section */}
          <section className="basis-1/2 shrink-0">
            <PageTitle className="text-2xl py-6" title="Tables" />
            <InvoiceTable />
            <div className="mt-2.5 text-sm">Table 2</div>
            <TotalSummaryTable />
          </section>
        </div>
      )}

      {/* Chat section */}
      {type === "chat" && (
        <div className="h-screen flex flex-col border-b border-[#000] mb-2">
          <PageTitle
            className="text-2xl py-3 pl-6 border-b border-[#E0E0E0]"
            title="Inactive Client Code"
          />
          <div className="h-[64vh] overflow-y-auto bg-white">
            <ActivityListSingleFile />
          </div>
          <FeedbackInputSection />
        </div>
      )}
    </div>
  );
});
