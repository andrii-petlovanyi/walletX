import styled from 'styled-components';
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
export const AppBar = styled.header`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 32px;
    background-color: var(--main-bg-cl);
  }
  @media ${device.desktop} {
    padding: 20px 16px;
  }
`;
export const Nav = styled.nav`
  /* display: flex; */
`;
const styles = {
  AppBar,
  Nav,
};
export default styles;
