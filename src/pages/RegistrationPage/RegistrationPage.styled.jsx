import styled from 'styled-components';
import ellipse1 from 'images/registration/ellipse1.png';
import ellipse2 from 'images/registration/ellipse2.png';
import { device } from 'components/Layout/styled';

export const FieldStyled = styled.div`
  height: 100vh;
  background-color: #e5e5e5;
  background-image: url(${ellipse1}), url(${ellipse2});
  background-position: bottom left, top right;
  background-repeat: no-repeat;
  display: flex;
`;

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 768px;
    padding-top: 60px;
  }
  @media ${device.desktop} {
    padding-top: 0;
    width: 1280px;
    flex-direction: row;
    align-items: stretch;
  }
`;

export const TitleFieldStyled = styled.div`
  width: 100%;
  display: none;
  position: relative;
  @media ${device.tablet} {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    justify-content: center;
  }
  @media ${device.desktop} {
    flex-direction: column;
    width: 45%;
    margin-top: 100px;
  }
  img {
    width: 250px;
    @media ${device.desktop} {
      width: 450px;
    }
  }
`;

export const FormFieldStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  @media ${device.tablet} {
    background-color: inherit;
    display: flex;
    align-items: flex-start;
  }
  @media ${device.desktop} {
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(25px);
    width: 55%;
  }
`;

export const TextStyled = styled.p`
  @media ${device.tablet} {
    margin-left: 40px;
  }
  @media ${device.desktop} {
    margin-top: 30px;
  }
  /* position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translate(-50%); */
  font-family: Poppins;
  font-size: 30px;
  line-height: 45px;
`;
