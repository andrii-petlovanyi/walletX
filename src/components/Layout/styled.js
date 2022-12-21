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
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;
const Wrapper = styled.div`
 width: 100%;
  /* margin-left: auto;
  margin-right: auto; */
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 480px) {
  width: 480px;

  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }


  /* @media ${device.tablet} {
    display: block;
    height: 100vh;
    /* background-image: url(${elipsebl}), url(${elipsepn});
    background-repeat: no-repeat;
    background-position: bottom 0 left 0, top 0 right 0; */
  }
  @media ${device.desktop} {
    display: flex;
  } */
`;

const styles = { LayoutStyled, Wrapper };
export default styles;
