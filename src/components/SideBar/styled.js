import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
  width: 480px;
  font-family: 'Poppins';
  font-size: 18px;
  line-height: 1.5;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-right: 1px solid rgba(231, 229, 242, 1);
  box-shadow: 1px 0px 0px 0px rgba(255, 255, 255, 0.6);
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  gap: 20px;

  &.icon {
    fill: currentColor;
  }

  &.active {
    font-weight: 700;
    fill: #6e78e8;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    /* color: ; */
  }
`;

const styles = { NavStyled, SideBarWrapper, NavLinkStyled };
export default styles;
