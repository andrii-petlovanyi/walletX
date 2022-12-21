import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { SideBar } from 'components/SideBar/SideBar';
import styles from './styled';

const Layout = () => {
  const { LayoutStyled, Wrapper } = styles;
  return (
    <LayoutStyled>
      <AppBar />
      <Wrapper>
        <SideBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Wrapper>
    </LayoutStyled>
  );
};
export default Layout;
