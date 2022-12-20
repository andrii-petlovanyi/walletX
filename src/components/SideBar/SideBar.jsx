import React from 'react';
import home_desk from 'img/home_desk.svg';
import stat_desk from 'img/stat_desk.svg';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import styles from 'components/SideBar/styled';
import { AiFillHome } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';
import { IconContext } from 'react-icons';

export const SideBar = () => {
  const { SideBarWrapper, NavStyled, NavLinkStyled } = styles;
  return (
    <SideBarWrapper>
      <NavStyled>
        <NavLinkStyled to="/">
          <IconContext.Provider value={{ className: 'icon' }}>
            <AiFillHome />
          </IconContext.Provider>
          Home
        </NavLinkStyled>
        <NavLinkStyled to="diagram">
          <IconContext.Provider value={{ className: 'icon' }}>
            <BiStats />
          </IconContext.Provider>
          Statistics
        </NavLinkStyled>
      </NavStyled>
      <Balance />
      <Currency />
    </SideBarWrapper>
  );
};
