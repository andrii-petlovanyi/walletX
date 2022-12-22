import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/Layout/styled';

const SideBarWrapper = styled.div`
  display: block;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  @media ${device.desktop} {
    min-width: 480px;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid rgba(231, 229, 242, 1);
    box-shadow: 1px 0px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;
const NavWrap = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NavStyled = styled.nav`
  display: flex;
  gap: 32px;
  @media ${device.tablet} {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
    font-family: 'Poppins';
    font-size: 18px;
    line-height: 1.5;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: flex;
  gap: 20px;
  align-items: center;

  .icon {
    width: 44px;
    height: 44px;
    background-color: #6e78e8;
    color: white;
    border-radius: 2px;

    @media ${device.tablet} {
      width: 24px;
      height: 24px;
    }
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

const styles = { NavStyled, SideBarWrapper, NavLinkStyled, NavWrap, device };
export default styles;
