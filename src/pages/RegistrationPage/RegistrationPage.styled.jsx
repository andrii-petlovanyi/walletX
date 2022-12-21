import styled from 'styled-components';
import ellipse1 from 'images/registration/ellipse1.png';
import ellipse2 from 'images/registration/ellipse2.png';

export const FieldStyled = styled.div`
  width: 100vw;

  margin: 0 auto;
  height: 100vh;
  display: flex;
  background-color: #e5e5e5;
  background-image: url(${ellipse1}), url(${ellipse2});
  background-position: bottom left, top right;
  background-repeat: no-repeat;
`;

export const TitleFieldStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
`;

export const FormFieldStyled = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 52px 91px 52px 107px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
`;
