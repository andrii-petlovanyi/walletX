import React from 'react';
import { useMedia } from 'react-use';
import LogoStyled from 'components/Logo/styled';
import logo from 'img/logo.svg';
import logo_mob from 'img/logo.svg';

const Logo = () => {
  const isWide = useMedia('(min-width: 768px)');
  return (
    <>
      <LogoStyled to="/">
        {isWide ? (
          <img src={logo} alt="logo" />
        ) : (
          <img src={logo_mob} alt="logo" />
        )}
        <span>Wallet</span>
      </LogoStyled>
    </>
  );
};
export default Logo;
