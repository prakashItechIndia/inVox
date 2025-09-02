import { Navigate, Route, Routes } from 'react-router-dom';
import { NavigationRoutes } from '../common/constant';
import { Login } from '../pages/Register/Login';
import { ForgotPassword } from '../pages/Register/ForgotPassword';
import { SetPassword } from '../pages/Register/SetPassword';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={NavigationRoutes.SignIn} element={<Login />} />
      <Route
        path={NavigationRoutes.ForgotPassword}
        element={<ForgotPassword />}
      />
      <Route path={NavigationRoutes.SetPassword} element={<SetPassword />} />
      <Route path="*" element={<Navigate to={NavigationRoutes.SignIn} />} />
    </Routes>
  );
};
