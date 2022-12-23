import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiStats } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { FaDollarSign } from 'react-icons/fa';
import styles from 'components/SideBar/styled';

const NavMob = () => {
  const { NavStyled, NavLinkStyled } = styles;
  return (
    <>
      <NavStyled>
        <NavLinkStyled to="/">
          <IconContext.Provider value={{ className: 'icon' }}>
            <AiFillHome />
          </IconContext.Provider>
        </NavLinkStyled>
        <NavLinkStyled to="diagram">
          <IconContext.Provider value={{ className: 'icon' }}>
            <BiStats />
          </IconContext.Provider>
        </NavLinkStyled>
        <NavLinkStyled to="currency">
          <IconContext.Provider value={{ className: 'icon' }}>
            <FaDollarSign />
          </IconContext.Provider>
        </NavLinkStyled>
      </NavStyled>
    </>
  );
};
export default NavMob;
