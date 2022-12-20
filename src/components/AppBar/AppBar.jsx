import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import Logo from 'components/Logo/Logo';
import styles from 'components/AppBar/styled';

const AppBar = () => {
  return (
    <styles.AppBar>
      <styles.Nav>
        <Logo />
      </styles.Nav>
      <UserMenu />
    </styles.AppBar>
  );
};
export default AppBar;
