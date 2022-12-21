import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const size = {
  mobileS: '320px',
  mobileM: '480px',
  tablet: '768px',
  desktop: '1280px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

const SideBarWrapper = styled.div`

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    padding: 40px 32px 20px;
    background-color: rgba(231, 234, 242, 0.4);
    backdrop-filter: blur(25px);
  }
  @media ${device.desktop} {
    flex-direction: column;
    padding: 40px 16px;
    border-right: 1px solid rgba(231, 229, 242, 1);
    box-shadow: 1px 0px 0px 0px rgba(255, 255, 255, 0.6);
    background-color: rgba(231, 234, 242, 0.4);
    backdrop-filter: blur(25px);
  }
`;
const NavWrap = styled.div`
  @media ${device.tablet} {
    /* display: flex; */
  }
`;

const NavStyled = styled.nav`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
    font-family: 'Poppins';
    font-size: 18px;
    line-height: 1.5;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media ${device.desktop} {
    width: 480px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  gap: 20px;
  align-items: center;

  .icon {
    background-color: #6e78e8;
    color: white;
    border-radius: 2px;
    width: 24px;
    height: 24px;
  }

  &.active .icon {
    background-color: #4a56e2;
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }

  &.active {
    font-weight: 700;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
  }
`;

const styles = { NavStyled, SideBarWrapper, NavLinkStyled, NavWrap };
export default styles;