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

function LoginPage() {
  return (
    <FieldStyled>
      <ContainerStyled>
        <TitleFieldStyled>
          <img src={loginGroupDesk} alt="" width="436" />
          <TextStyled>Finance App</TextStyled>
        </TitleFieldStyled>
        <FormFieldStyled>
          <LoginForm />
        </FormFieldStyled>
      </ContainerStyled>
    </FieldStyled>
  );
}

export default LoginPage;
