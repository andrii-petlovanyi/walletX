import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import Logo from 'components/Logo/Logo';
import styles from 'components/AppBar/styled';

const AppBar = () => {
  const { AppBarStyled, Nav, Wrap } = styles;
  return (
    <AppBarStyled>
      <Wrap>
        <Nav>
          <Logo />
        </Nav>
        <UserMenu />
      </Wrap>
    </AppBarStyled>
  );
};
export default AppBar;
