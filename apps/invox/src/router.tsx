import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';

import { CurrentUserRole } from '@shared/lib/utils';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';

export const Router = observer(() => {
  return (
    <BrowserRouter>
      {CurrentUserRole ? <PrivateRoutes /> : <PublicRoutes />}
      {/* {appState.isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />} */}
    </BrowserRouter>
  );
});
