import React from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import Logo from 'components/Logo/Logo';
import styles from 'components/AppBar/styled';
import Container from 'components/Container/Container';

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
