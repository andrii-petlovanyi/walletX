import styled from 'styled-components';
const size = {
  mobileS: '320px',
  mobileM: '480px',
  tablet: '768px',
  desktop: '1280px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
const AppBarStyled = styled.header`
  background-color: var(--main-bg-cl);
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }
  @media ${device.desktop} {
  }
`;
const Wrap = styled.div`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }
  @media ${device.desktop} {
  }
`;
export const Nav = styled.nav`
  /* display: flex; */
`;
const styles = {
  AppBarStyled,
  Nav,
  Wrap,
  device,
};
export default styles;
