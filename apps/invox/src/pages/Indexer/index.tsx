import { NavigationRoutes } from "@/common/constant";
import { CustomTable } from "@/components/custom-table";
import { Header } from "@/components/header";
import { CompactPaginationToolbar } from "@/components/pagination";
import PaginationWrapper from "@/components/pagination-wrapper";
import { useGetInvoice } from "@/hooks/rq/queries/useGetInvoice";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  tabsTriggerClassName,
} from "@shared/components/ui/tabs";
import { useLanguageTranslation } from "@shared/hooks/ui/useLanguageTranslation";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "shared";
import { Columns } from "./column";

interface Props {
  portalType?: string;
  isHiddenHeader?: boolean;
}

export const Indexing = observer(function Indexing(props: Props) {
  const { isHiddenHeader = false } = props;
  const currentPath = window.location.pathname;
  const navigate = useNavigate();
  const { t } = useLanguageTranslation();
  const { data, isLoading } = useGetInvoice();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentTab, setCurrentTab] = useState("pending");

  const getTitle = () => {
    switch (currentPath) {
      case NavigationRoutes.Verifier:
        return t("VERIFIER.TITLE");
      default:
        return t("INDEXER.TITLE");
    }
  };

  const getTabs = () => {
    switch (currentPath) {
      case NavigationRoutes.Verifier:
        return [
          { name: "Pending", key: "pending" },
          { name: "Processed", key: "processed" },
          { name: "Priority", key: "priority" },
        ];
      default:
        return [
          { name: "Pending", key: "pending" },
          { name: "Processed", key: "processed" },
          { name: "Priority", key: "priority" },
          { name: "Clarifications", key: "clarifications" },
          { name: "Rejected", key: "rejected" },
        ];
    }
  };

  return (
    <>
      {!isHiddenHeader && (
        <Header
          hiddenSearch
          hiddenAddButton
          hiddenExport
          hiddenFilterDropdown
          isLoading={isLoading}
          title={getTitle()}
          className={cn("bg-white")}
        />
      )}
      <div className={cn('flex items-center justify-between py-0 bg-[#FAFAFA]', { "!p-0 !m-0": isHiddenHeader })}>
        <Tabs
          orientation={"horizontal"}
          value={currentTab}
          className="p-0 pl-4 !border-none rounded-none"
        >
          <TabsList className="w-full justify-start	overflow-x-auto !border-none rounded-none">
            {getTabs().map((e, index) => (
              <TabsTrigger
                value={e?.key}
                key={`tab_trigger_${index}`}
                onClick={() => {
                  setCurrentTab(e?.key);
                }}
                className={tabsTriggerClassName}
              >
                {e.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <CompactPaginationToolbar
          itemsPerPage={itemsPerPage}
          onPageSizeChange={setItemsPerPage}
          onSearchChange={() => {}}
          currentPage={currentPage}
          pageCount={Math.ceil((data?.length || 0) / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </div>
      <div
        className={cn("flex h-full w-full flex-col p-0 pt-0", {
          "!p-0 !m-0": isHiddenHeader,
        })}
      >
        <CustomTable
          columns={Columns()}
          data={data?.length ? data : []}
          isLoading={isLoading}
          tableClassName={cn("rounded-t-none")}
          selectedRow={() => {
            navigate(`${NavigationRoutes.Indexing}`, {
              state: { type: "cut" },
            });
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
