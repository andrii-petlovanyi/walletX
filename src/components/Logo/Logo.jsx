import React from 'react';
import LogoStyled from 'components/Logo/styled';
import logo from 'img/logo.svg';

const Logo = () => {
  return (
    <>
      <LogoStyled to="/">
        <img src={logo} alt="logo" />
        <span>Wallet</span>
      </LogoStyled>
    </>
  );
};
export default Logo;
