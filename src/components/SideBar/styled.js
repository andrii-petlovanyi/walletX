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
  background-color: rgba(231, 234, 242, 0.4);
  backdrop-filter: blur(25px);
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  gap: 20px;
  align-items: center;

  .icon {
    background-color: #6e78e8;
    color: white;
    border-radius: 2px;
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

const styles = { NavStyled, SideBarWrapper, NavLinkStyled };
export default styles;
