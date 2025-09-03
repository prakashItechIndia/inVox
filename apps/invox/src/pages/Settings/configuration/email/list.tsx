

import { CustomTable } from '@/components/custom-table';
import { NoDataFound } from '@/components/noData';
import PaginationWrapper from '@/components/pagination-wrapper';
import { useGetUsersList } from '@/hooks/rq/queries/useGetUsers';
import { Tabs, TabsList, TabsTrigger, tabsTriggerClassName } from '@shared/components/ui/tabs';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { InvoxUserType } from 'shared';
import { Columns } from './column';

type Props = {
  portalType: InvoxUserType;
};

const NavList = [
  {
    name: 'Incoming',
    key: 'incoming',
  },
  {
    name: 'Outgoing',
    key: 'outgoing',
  },
];

export const Email = observer(function(props: Props) {
  const { t } = useLanguageTranslation();
  const {
    portalType,
  } = props;

  const { data, isLoading, error, refetch } = useGetUsersList(portalType);
  const [currentTab, setCurrentTab] = React.useState('incoming');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

  return (

    <div className="w-full bg-white max-w-full overflow-y-auto border border-gray-200 rounded-md">
      <div className="bg-[#FAFAFA] rounded-md">
        <div className="flex items-center justify-between py-0 bg-[#FAFAFA] border-b-2 border-gray-200">
          <Tabs orientation={'horizontal'} value={currentTab} className="p-0 pl-4">
            <TabsList className="w-full justify-start	overflow-x-auto">
              {NavList.map((e, index) => (
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

        </div>

        <NoDataFound
          error={error?.message}
          isLoading={isLoading}
          isNodata={!data || data.length === 0}
          title={t('USERS.TITLE')}
        >
          <div className='max-h-[50vh] overflow-auto'>
            <CustomTable
              columns={Columns()}
              data={data?.length ? data : []}
              isLoading={isLoading}
              tableClassName='!border-none !rounded-none'
            />
          </div>
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
        </NoDataFound>

      </div>

    </div>
  );
});
