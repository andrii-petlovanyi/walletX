import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { SideBar } from 'components/SideBar/SideBar';
import styles from './styled';
import Container from 'components/Container/Container';
import { Box } from 'components/Box';

const Layout = () => {
  const { LayoutStyled, Wrapper } = styles;
  return (
    <LayoutStyled>
      <AppBar />
      <Wrapper>
        {/* <Container> */}
        <SideBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        {/* </Container> */}
      </Wrapper>
    </LayoutStyled>
  );
};
export default Layout;
