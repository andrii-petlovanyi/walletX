import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import {
  ContainerStyled,
  FieldStyled,
  FormFieldStyled,
  TextStyled,
  TitleFieldStyled,
} from 'pages/RegistrationPage/RegistrationPage.styled';
import loginGroupDesk from 'images/login/loginGroupDesk.svg';
import ImgWrapAnim from 'components/Animations/ImgWrapAnim';
import SectionAnim from 'components/Animations/SectionAnim';

function LoginPage() {
  return (
    <FieldStyled>
      <ContainerStyled>
        <TitleFieldStyled>
          <ImgWrapAnim>
            <img src={loginGroupDesk} alt="" width="436" />
          </ImgWrapAnim>
          <SectionAnim delay={0.1}>
            <TextStyled>Finance App</TextStyled>
          </SectionAnim>
        </TitleFieldStyled>
        <FormFieldStyled>
          <SectionAnim delay={0.3}>
            <LoginForm />
          </SectionAnim>
        </FormFieldStyled>
      </ContainerStyled>
    </FieldStyled>
  );
}

export default LoginPage;
