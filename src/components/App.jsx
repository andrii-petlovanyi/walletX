import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import ModalWindow from './ModalWindow/ModalAddTransaction/ModalAddTransaction';
import PrivateRoute from './Routs/PrivateRoute';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { useDispatch, useSelector } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import PublicRoute from './Routs/PublicRoute';
import StatTab from './StatTab/StatTab';
import HomePage from 'pages/HomePage/HomePage';
import Currency from './Currency/Currency';

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
              <Route index element={<HomePage />} />
              <Route path="diagram" element={<StatTab />} />
              <Route path="currency" element={<Currency />} />
              {/* <Route path="test" element={<ModalWindow />} /> */}
            </Route>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>
          <Route path="test" element={<ModalWindow />} />
        </Routes>
      </>
    )
  );
};
