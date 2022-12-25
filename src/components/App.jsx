import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import operations from 'redux/auth/auth-operations';
import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const StatTab = lazy(() => import('pages/StatTab/StatTab'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CurrencyMob = lazy(() => import('components/Currency/CurrencyMob'));
const Layout = lazy(() => import('components/Layout/Layout'));

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
      <Suspense fallback={false}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="diagram" element={<StatTab />} />
              <Route path="currency" element={<CurrencyMob />} />
            </Route>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Suspense>
    )
  );
};
