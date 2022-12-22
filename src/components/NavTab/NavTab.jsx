import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import styles from 'components/SideBar/styled';

const NavTab = () => {
  const { NavStyled, NavLinkStyled } = styles;
  return (
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
  );
};
export default NavTab;
