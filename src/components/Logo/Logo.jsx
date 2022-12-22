import React from 'react';
import LogoStyled from 'components/Logo/styled';
import logo from 'img/logo.svg';
import logo_mob from 'img/logo.svg';

const Logo = () => {
  const viewPortWidth = window.innerWidth;
  return (
    <>
      <LogoStyled to="/">
        {viewPortWidth < 767.98 ? (
          <img src={logo_mob} alt="logo" />
        ) : (
          <img src={logo} alt="logo" />
        )}
        <span>Wallet</span>
      </LogoStyled>
    </>
  );
};
export default Logo;
