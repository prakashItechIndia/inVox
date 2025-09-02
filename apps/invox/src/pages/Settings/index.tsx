

import SubSideNavbar from '@/components/settings-navbar/sidebar';
import { appState } from '@/state';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import { InvoxUserType } from 'shared';
import { ManageUsers } from './manageUsers';
import { RolesAndPermissions } from './RoleAndPermission';
import { Configurations } from './configuration';
import { Reports } from './report';

type Props = {
  portalType: InvoxUserType;
  lenderId?: string;
};

export const Settings = observer(function(props: Props) {

  const {
    portalType,
  } = props;

  const [activeSidebar, setactiveSidebar] = React.useState('Manager Users');

  return (
    <div className="flex max-h-full min-h-screen w-full max-w-full">
      <SubSideNavbar
        activeTab={activeSidebar}
        setActiveTab={(tab: string) => {
          setactiveSidebar(tab)
        }}
        isCollapsed={!appState.preferSidebarOpen}
        setIsCollapsed={useCallback(
          (collapse) => appState.savePreferSidebarOpen(!collapse),
          [],
        )}
      />
      {/* main page */}
      <div className="w-full bg-white max-w-full overflow-y-auto">
        {activeSidebar === 'Manager Users' && <ManageUsers portalType={portalType} />}
        {activeSidebar === 'Roles & Permissions' && <RolesAndPermissions portalType={portalType} />}
        {activeSidebar === 'Configurations' && <Configurations portalType={portalType} />}
        {activeSidebar === 'Reports' && <Reports />}
      </div>
    </div>
  );
});
