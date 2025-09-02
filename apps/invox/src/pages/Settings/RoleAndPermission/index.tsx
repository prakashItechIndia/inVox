

import { Header } from '@/components/header';
import { NoDataFound } from '@/components/noData';
import { useGetUsersList } from '@/hooks/rq/queries/useGetUsers';
import { useLanguageTranslation } from '@shared/hooks/ui/useLanguageTranslation';
import { observer } from 'mobx-react-lite';
import { InvoxUserType } from 'shared';
import { UsersTableView } from '../manageUsers/usersTableView';
import { Columns } from './column';

type Props = {
  portalType: InvoxUserType;
};

export const RolesAndPermissions = observer(function(props: Props) {
  const { t } = useLanguageTranslation();
  const {
    portalType,
  } = props;

  const { data, isLoading, error } = useGetUsersList(portalType);

  return (

    <div className="w-full bg-white  max-w-full overflow-y-auto">
      <div className="">
        <Header
          title={t('SETTINGS.ROLES_PERMISSIONS.TITLE')}
          // className='bg-grayMediumColor'
          hiddenFilterDropdown={true}
          hiddenSearch={true}
          hiddenAddButton={true}
        />

        <NoDataFound
          error={error}
          isLoading={isLoading}
          isNodata={!data || data.length === 0}
          title={t('SETTINGS.ROLES_PERMISSIONS.TITLE')}
        >
          <UsersTableView columns={Columns()} data={data} isLoading={isLoading} />
        </NoDataFound>
      </div>
    </div>
  );
});
