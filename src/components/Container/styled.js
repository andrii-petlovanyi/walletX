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

const ContainerStyled = styled.div`
  width: 100%;
  /* margin-left: auto;
  margin-right: auto; */
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media ${device.mobileM} {
    width: 480px;
  }
  @media ${device.tablet} {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${device.desktop} {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const styles = { ContainerStyled };
export default styles;
