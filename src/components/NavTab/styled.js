import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/Layout/styled';

const NavStyled = styled.nav`
  /* @media ${device.tablet} {
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
  } */
`;

const NavLinkStyled = styled(NavLink)`
  /* display: flex;
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
  } */
`;

const styles = { NavStyled, NavLinkStyled };
export default styles;
