import React from 'react';
import home_desk from 'img/home_desk.svg';
import stat_desk from 'img/stat_desk.svg';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import styles from 'components/SideBar/styled';

export const SideBar = () => {
  return (
    <styles.SideBarWrapper>
      <styles.NavStyled>
        <styles.NavLinkStyled to="/">
          <img src={home_desk} alt="home" /> Home
        </styles.NavLinkStyled>
        <styles.NavLinkStyled to="diagram">
          <img src={stat_desk} alt="statistics" />
          Statistics
        </styles.NavLinkStyled>
      </styles.NavStyled>
      <Balance />
      <Currency />
    </styles.SideBarWrapper>
  );
};
