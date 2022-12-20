import styled from 'styled-components';
import elipsebl from 'img/elipsebl.svg';
import elipsepn from 'img/elipsepn.svg';

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

const LayoutStyled = styled.div`
  padding-bottom: 12px;
`;
const Wrapper = styled.div`
  @media ${device.tablet} {
    display: block;
    height: 100vh;
    background-image: url(${elipsebl}), url(${elipsepn});
    background-repeat: no-repeat;
    background-position: bottom 0 left 0, top 0 right 0;
  }
  @media ${device.desktop} {
    display: flex;
  }
`;

const styles = { LayoutStyled, Wrapper };
export default styles;
