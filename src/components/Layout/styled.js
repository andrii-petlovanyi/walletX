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

const LayoutStyled = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.mobileM} {
    width: 480px;
  }

  @media ${device.tablet} {
    width: 768px;
    padding: 32px 32px 84px 32px;
    display: block;
  }

  @media ${device.desktop} {
    width: 1280px;
    padding: 40px 16px 63px 16px;
    display: flex;
  }
`;

const styles = { LayoutStyled, Wrapper };
export default styles;
