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

const LayoutStyled = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  margin: 0 auto;
  padding: 12px 20px 0 20px;
  display: block;
  @media ${device.mobileM} {
    width: 480px;
  }

  @media ${device.tablet} {
    width: 768px;
    min-height: calc(100vh - 85px);
    padding: 32px 32px 84px 32px;
  }

  @media ${device.desktop} {
    width: 1280px;
    padding: 40px 16px 63px 16px;
    display: flex;
  }
`;

const styles = { LayoutStyled, Wrapper };
export default styles;
