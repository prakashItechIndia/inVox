import SideNavbar from '@/components/side-navbar';
import TopNavbar from '@/components/top-nav';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

export const PrivateRoute = observer(() => {
  return (
    <div className="flex max-h-full min-h-screen w-full max-w-full overflow-hidden">
      <SideNavbar />
      {/* main page */}
      <div className="bg-grayMediumColor w-full">
        <TopNavbar />
        <div className="w-full max-w-full h-[calc(100vh-64px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
});
