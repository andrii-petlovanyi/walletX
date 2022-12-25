import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { Outlet } from '../../../node_modules/react-router-dom/dist/index';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefresh = useSelector(authSelectors.getIsRefreshingUser);
  const isToken = useSelector(authSelectors.getToken);

  if (isLoggedIn && !isRefresh) {
    return <Outlet />;
  }

  if (!isLoggedIn && !isRefresh && !isToken) {
    return <Navigate to={'/login'} />;
  }
}
