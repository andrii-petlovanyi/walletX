import React from 'react';
import {
  AppBarStyled,
  NavStyled,
  NavLinkStyled,
} from 'components/AppBar/styled';

export const AppBar = () => {
  return (
    <AppBarStyled>
      <NavStyled>
        <NavLinkStyled to="">Home</NavLinkStyled>
        <NavLinkStyled to="movies">Movies</NavLinkStyled>
      </NavStyled>
    </AppBarStyled>
  );
};
