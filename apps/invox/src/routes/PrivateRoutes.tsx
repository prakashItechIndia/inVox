import { PleaseWaitLoadText } from '@/components/please-wait-load-text';
import { useGetUsersList } from '@/hooks/rq/queries/useGetUsers';
import { Clarifier } from '@/pages/Clarify';
import { Help } from '@/pages/help';
import { Invoices } from '@/pages/Invoices';
import { Logs } from '@/pages/Logs';
import { Settings } from '@/pages/Settings';
import { appState } from '@/state';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CurrentUserRole, InvoxUserType } from 'shared';
import { NavigationRoutes } from '../common/constant';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/MyProfile';
import { PrivateRoute } from '../pages/PrivateRoute';
import { Verifier } from '@/pages/Verifier';
import { PdfPageDemo } from '@/pages/pdfpage';

export const PrivateRoutes = observer(() => {
  // const userType = appState.user?.userType;
  const userType: InvoxUserType | undefined = CurrentUserRole;
  const { data, isLoading } = useGetUsersList(
    userType as InvoxUserType,
    undefined,
    appState.user?.id,
  );

  React.useEffect(() => {
    if (data?.length) {
      appState.setUserInfo(data[0]);
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <PleaseWaitLoadText />
      </div>
    );
  }

  return (
    <Routes>
      <Route path={NavigationRoutes.Home} element={<PrivateRoute />}>
        <Route path={NavigationRoutes.Dashboard} element={<Dashboard portalType={userType as InvoxUserType} />} />
        <Route path={NavigationRoutes.Invoices} element={<Invoices />} />
        <Route path={NavigationRoutes.Clarifier} element={<Clarifier />} />
        <Route path={NavigationRoutes.Verifier} element={<Verifier />} />
        <Route path={NavigationRoutes.Indexer} element={<Verifier />} />
        <Route path={NavigationRoutes.Help} element={<Help />} />
        <Route path={NavigationRoutes.pdfpage} element={<PdfPageDemo />} />
        <Route path={NavigationRoutes.Profile} element={<Profile />} />
        <Route
          path={NavigationRoutes.Settings}
          element={<Settings portalType={userType as InvoxUserType} />}
        />
        <Route
          path={NavigationRoutes.Logs}
          element={<Logs portalType={userType as InvoxUserType} />}
        />
      </Route>
      <Route path="*" element={<Navigate to={NavigationRoutes.Home} />} />
    </Routes>
  );
});
