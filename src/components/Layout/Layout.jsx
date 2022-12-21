import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { SideBar } from 'components/SideBar/SideBar';
import styles from './styled';
import Container from 'components/Container/Container';

const Layout = () => {
  const { LayoutStyled, Wrapper } = styles;
  return (
    <LayoutStyled>
      <Container>
        <AppBar />
        <Wrapper>
          <SideBar />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Wrapper>
      </Container>
    </LayoutStyled>
  );
};
export default Layout;
