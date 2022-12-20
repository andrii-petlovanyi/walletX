import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import Logo from 'components/Logo/Logo';
import styles from 'components/AppBar/styled';

const AppBar = () => {
  const { AppBar, Nav } = styles;
  return (
    <AppBar>
      <Nav>
        <Logo />
      </Nav>
      <UserMenu />
    </AppBar>
  );
};
export default AppBar;
