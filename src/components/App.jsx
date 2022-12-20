import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import PrivateRoute from './Routs/PrivateRoute';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import PublicRoute from './Routs/PublicRoute';
import StatTab from './StatTab/StatTab';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isRefreshingUser
  );

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<StatTab />} />
              <Route path="diagram" element={<div>Statistics</div>} />
            </Route>
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </>
    )
  );
};
