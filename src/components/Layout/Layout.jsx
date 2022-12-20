import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { SideBar } from 'components/SideBar/SideBar';
import styles from './styled';

const Layout = () => {
  return (
    <styles.LayoutStyled>
      <AppBar />
      <styles.Wrapper>
        <SideBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </styles.Wrapper>
    </styles.LayoutStyled>
  );
};
export default Layout;
