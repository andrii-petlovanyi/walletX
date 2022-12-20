import React from 'react';
import home_desk from 'img/home_desk.svg';
import stat_desk from 'img/stat_desk.svg';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import styles from 'components/SideBar/styled';

export const SideBar = () => {
  const { SideBarWrapper, NavStyled, NavLinkStyled } = styles;
  return (
    <SideBarWrapper>
      <NavStyled>
        <NavLinkStyled to="/">
          <img className="icon" src={home_desk} alt="home" /> Home
        </NavLinkStyled>
        <NavLinkStyled to="diagram">
          <img src={stat_desk} alt="statistics" />
          Statistics
        </NavLinkStyled>
      </NavStyled>
      <Balance />
      <Currency />
    </SideBarWrapper>
  );
};
