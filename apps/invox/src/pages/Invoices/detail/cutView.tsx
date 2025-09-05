import { PageTitle } from "@/components";
import { CustomSelect } from "@/components/custom-select";
import { ReactCutIcon } from "@shared/components/icons/invoice";
import { Button } from "@shared/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "shared";

const PAGE_TYPES = [
  { label: "Invoice", value: "invoice" },
  { label: "Misc", value: "misc" },
];

const TOTAL_PAGES = 110;

type PageType = "invoice" | "misc";

type PageData = {
  number: number;
  type: PageType;
};

const defaultInvoicePages = [1, 4];
const groupPages = (pages: PageData[], groupSize = 4): PageData[][] => {
  const grouped: PageData[][] = [];
  for (let i = 0; i < pages.length; i += groupSize) {
    grouped.push(pages.slice(i, i + groupSize));
  }
  return grouped;
};

function PageCard({
  page,
  selected,
  onSelect,
  onTypeChange,
  onCut,
}: {
  page: PageData;
  selected: boolean;
  onSelect: () => void;
  onTypeChange: (val: PageType) => void;
  onCut: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2 p-2 w-full">
      {/* Left Content */}
      <div className="flex items-center gap-2 flex-grow min-w-0">
        <Button
          variant={selected ? "highlight" : "outline"}
          className="min-w-[80px] whitespace-nowrap"
          onClick={onSelect}
        >
          Page {page.number}
        </Button>

        <div className="flex-grow min-w-0">
          <CustomSelect
            value={page.type}
            onValueChange={(val) => onTypeChange(val as PageType)}
            options={PAGE_TYPES}
            className={cn(
              "w-full border border-gray-300 !text-md text-[#000] data-[placeholder]:text-[#000] data-[placeholder]:text-sm"
            )}
            placeholderClassName="!text-md text-[#000]"
          />
        </div>
      </div>

      {/* Cut Icon */}
      <Button
        variant="outline"
        className="rounded-[50%] h-10 w-10 p-0 border border-[#3b30b4] shrink-0"
        onClick={onCut}
      >
        <ReactCutIcon />
      </Button>
    </div>
  );
}

export const InvoiceCutView = () => {
  const [selectedPage, setSelectedPage] = useState<number | null>(null);
  const [pages, setPages] = useState<PageData[]>([]);

  useEffect(() => {
    const initialPages: PageData[] = Array.from(
      { length: TOTAL_PAGES },
      (_, i) => {
        const pageNum = i + 1;
        return {
          number: pageNum,
          type: defaultInvoicePages.includes(pageNum) ? "invoice" : "misc",
        };
      }
    );
    setPages(initialPages);
    setSelectedPage(defaultInvoicePages[0] ?? 1);
  }, []);

  const handleTypeChange = (pageNum: number, newType: PageType) => {
    setPages((prev) =>
      prev.map((p) => (p.number === pageNum ? { ...p, type: newType } : p))
    );
  };

  const handleCut = (pageNum: number) => {
    console.log(pageNum);
  };

  const groupedPages = groupPages(pages, 4);

  return (
    <div className="py-4 px-6 flex flex-col gap-y-2.5 font-inter">
      <PageTitle
        title={`Total Pages (${TOTAL_PAGES})`}
        className="text-2xl font-bold mb-6"
      />

      <div className="flex flex-col gap-6 h-[calc(100vh-120px)] overflow-auto">
        {groupedPages.map((group, idx) => (
          <div
            key={idx}
            className={cn(
              "bg-[#FAFAFA] rounded-xl p-2",
              selectedPage === group[0]?.number && "bg-[#E0DCFF]"
            )}
          >
            {group.map((page) => (
              <PageCard
                key={page.number}
                page={page}
                selected={selectedPage === page.number}
                onSelect={() => setSelectedPage(page.number)}
                onTypeChange={(val) => handleTypeChange(page.number, val)}
                onCut={() => handleCut(page.number)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
