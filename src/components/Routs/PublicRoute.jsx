import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PublicRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefresh = useSelector(authSelectors.getIsRefreshingUser);

  if (isLoggedIn && !isRefresh) {
    return <Navigate to="/" />;
  }

  if (!isLoggedIn && !isRefresh) {
    return <Outlet />;
  }
}
