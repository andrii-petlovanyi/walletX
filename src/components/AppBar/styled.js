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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  background-color: var(--main-bg-cl);
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;
const Wrap = styled.div`
  width: 100%;
  max-width: 480px;
  @media ${device.tablet} {
    max-width: 768px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }
  @media ${device.desktop} {
    max-width: 1280px;
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
