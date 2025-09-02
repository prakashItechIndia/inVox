

import { Header } from '@/components/header';
import { useGetUsersList } from '@/hooks/rq/queries/useGetUsers';
import { ReactManageUserIcon } from '@shared/components/icons/settings';
import { Tabs, TabsList, TabsTrigger, tabsTriggerClassName } from '@shared/components/ui/tabs';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { InvoxUserType } from 'shared';
import { AddUsers } from './addEdit';
import { Columns } from './column';
import { UsersGridView } from './usersGridView';
import { UsersTableView } from './usersTableView';
import { NoDataFound } from '@/components/noData';
import { CompactPaginationToolbar } from '@/components/pagination';

type Props = {
  portalType: InvoxUserType;
};

const NavList = [
  {
    name: 'Table',
    key: 'table-view',
    component: UsersTableView,
    icon: (c: string) => <ReactManageUserIcon color={c} className='w-5 h-5' />,
  },
  {
    name: 'Grid',
    key: 'grid-view',
    component: UsersGridView,
    icon: (c: string) => <ReactManageUserIcon color={c} className='w-5 h-5' />,
  },
];

export const ManageUsers = observer(function(props: Props) {
  const { t } = useLanguageTranslation();
  const [addUserOpen, setAddUserOpen] = React.useState(
    false,
  );
  const {
    portalType,
  } = props;

  const { data, isLoading, error, refetch } = useGetUsersList(portalType);
  const [currentTab, setCurrentTab] = useState('table-view');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleOpenAndClose = () => {
    setAddUserOpen((prev) => !prev);
  };
  return (

    <div className="w-full bg-white max-w-full overflow-y-auto">
      <Header
        searchPlaceHolder={t('USERS.SEARCH_PLACEHOLDER')}
        isLoading={isLoading}
        title={t('USERS.TITLE')}
        actionBtnClick={() => handleOpenAndClose()}
        addBtnText={t('USERS.TITLE')}
        hiddenFilterDropdown={true}
        hiddenSearch={true}
      />

      <div className="flex items-center justify-between py-0 bg-[#FAFAFA]">
        <Tabs orientation={'horizontal'} value={currentTab} className="p-0 pl-4 !border-none">
          <TabsList className="w-full justify-start	overflow-x-auto !border-none">
            {NavList.map((e, index) => (
              <TabsTrigger
                value={e?.key}
                key={`tab_trigger_${index}`}
                onClick={() => {
                  setCurrentTab(e?.key);
                }}
                className={tabsTriggerClassName}
              >
                {e.icon &&
                  e.icon(currentTab === e.key ? 'text-blue-600' : 'text-gray-400')}
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
        <div className='!border-t !border-[#E0E0E0] max-h-[80vh] overflow-auto pb-12'>
          {currentTab === 'table-view' && <UsersTableView columns={Columns()} handleOpenAndClose={handleOpenAndClose} data={data} isLoading={isLoading} />}
          {currentTab === 'grid-view' && <UsersGridView handleOpenAndClose={handleOpenAndClose} data={data} isLoading={isLoading} />}
        </div>
      </NoDataFound>

      {addUserOpen ? (
        <AddUsers
          onSuccess={() => {
            refetch();
            handleOpenAndClose();
          }}
          open={addUserOpen}
          onClose={() => {
            handleOpenAndClose();
          }}
          portalType={portalType}
        />
      ) : null}
    </div>
  );
});
