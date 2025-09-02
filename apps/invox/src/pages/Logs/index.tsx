

import { Header } from '@/components/header';
import { NoDataFound } from '@/components/noData';
import { CompactPaginationToolbar } from '@/components/pagination';
import { useGetLogsList } from '@/hooks/rq/queries/useGetLogs';
import { Tabs, TabsList, TabsTrigger } from '@shared/components/ui/tabs';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { InvoxUserType } from 'shared';
import { ActivityColumns, AuditColumns, SystemColumns } from './column';
import { LogLists } from './list';

type Props = {
  portalType: InvoxUserType;
};

const NavList = [
  {
    name: 'Audit Logs',
    key: 'audit-logs',
  },
  {
    name: 'Activity Logs',
    key: 'activity-logs',
  },
  {
    name: 'System Logs',
    key: 'system-logs',
  }
];

export const Logs = observer(function(props: Props) {
  const { t } = useLanguageTranslation();
  const {
    portalType,
  } = props;

  const { data, isLoading, error, refetch } = useGetLogsList(portalType);
  const [currentTab, setCurrentTab] = useState('audit-logs');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // switch between different log types
  const getColumns = () => {
    switch (currentTab) {
      case 'audit-logs':
        return AuditColumns();
      case 'activity-logs':
        return ActivityColumns();
      case 'system-logs':
        return SystemColumns();
      default:
        return AuditColumns();
    }
  };
  return (

    <div className="w-full bg-white max-w-full overflow-y-auto">
      <Header
        searchPlaceHolder={t('USERS.SEARCH_PLACEHOLDER')}
        isLoading={isLoading}
        title={t('LOGS.TITLE')}
        hiddenFilterDropdown={true}
        hiddenSearch={true}
        hiddenAddButton={true}
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

      <NoDataFound
        error={error?.message}
        isLoading={isLoading}
        isNodata={!data || data.length === 0}
        title={t('USERS.TITLE')}
      >
        <div className='!border-t !border-[#E0E0E0]'>
          <LogLists columns={getColumns()} data={data} isLoading={isLoading} />
        </div>
      </NoDataFound>
    </div>
  );
});
