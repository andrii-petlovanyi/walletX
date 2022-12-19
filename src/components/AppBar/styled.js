import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const NavStyled = styled.nav`
  display: flex;
  gap: 25px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 30px;
  line-height: 47px;
  color: black;
  text-decoration: none;
  letter-spacing: 0.02em;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  &.active {
    color: #990066;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #800080;
    -webkit-text-shadow: 2px 2px 2px #000;
    -moz-text-shadow: 2px 2px 2px #000;
    text-shadow: 2px 2px 2px #000;
  }
`;
