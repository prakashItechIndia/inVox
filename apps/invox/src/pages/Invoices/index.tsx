import { NavigationRoutes } from "@/common/constant";
import { CustomTable } from "@/components/custom-table";
import { Header } from "@/components/header";
import { CompactPaginationToolbar } from "@/components/pagination";
import PaginationWrapper from "@/components/pagination-wrapper";
import { useGetInvoice } from "@/hooks/rq/queries/useGetInvoice";
import { Tabs, TabsList, TabsTrigger } from "@shared/components/ui/tabs";
import { useLanguageTranslation } from "@shared/hooks/ui/useLanguageTranslation";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "shared";
import { Columns } from "./column";

const NavList = [
  {
    name: "All",
    key: "all"
  },
  {
    name: "Pending",
    key: "pending"
  },
  {
    name: "Priority",
    key: "priority"
  },
  {
    name: "Indexing",
    key: "indexing"
  },
  {
    name: "Keying",
    key: "keying"
  },
  {
    name: "Shipped",
    key: "shipped"
  },
  {
    name: "Clarifications",
    key: "clarifications"
  },
  {
    name: "Rejected",
    key: "rejected"
  }
];


export const Invoices = observer(function Invoices() {
  const navigate = useNavigate();
  const { t } = useLanguageTranslation();
  const { data, isLoading } = useGetInvoice();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentTab, setCurrentTab] = useState('all');

  return (
    <>
      <Header
        hiddenSearch
        hiddenAddButton
        hiddenExport
        hiddenFilterDropdown
        isLoading={isLoading}
        title={t("INVOICES.TITLE")}
        className={cn("bg-white")}
      // isSearchInputHide
      />
      <div className="flex items-center justify-between py-4 bg-[#FAFAFA] !h-16">
        <Tabs
          orientation={"horizontal"}
          value={currentTab}
          className="p-0 pl-4 !border-none rounded-none"
        >
          <TabsList className="w-full justify-start	overflow-x-auto !border-none rounded-none">
            {NavList.map((e, index) => (
              <TabsTrigger
                value={e?.key}
                key={`tab_trigger_${index}`}
                onClick={() => {
                  setCurrentTab(e?.key);
                }}
                className={
                  "flex items-center !bg-[#FAFAFA] font-normal py-[0.75rem] px-[0.625rem] text-[0.8125rem] rounded-none"
                }
              >
                {e.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <CompactPaginationToolbar
          itemsPerPage={itemsPerPage}
          onPageSizeChange={setItemsPerPage}
          onSearchChange={() => { }}
          currentPage={currentPage}
          pageCount={Math.ceil((data?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
      <div className={cn("flex h-full w-full flex-col p-0 pt-0")}>
        <CustomTable
          columns={Columns()}
          data={data?.length ? data : []}
          isLoading={isLoading}
          tableClassName={cn("rounded-t-none")}
          selectedRow={(src) => {
            navigate(`${NavigationRoutes.Invoices.replace(":id", src.id)}`);
          }}
        />
        <PaginationWrapper
          totalItems={data?.length || 0}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onPageSizeChange={(size) => {
            setItemsPerPage(size);
            setCurrentPage(1); // reset to first page on page size change
          }}
        />
      </div>
    </>
  );
});
