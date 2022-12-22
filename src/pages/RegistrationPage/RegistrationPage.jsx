import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import mainRegister from 'images/registration/mainRegister.svg';
import {
  FieldStyled,
  TitleFieldStyled,
  FormFieldStyled,
  TextStyled,
  ContainerStyled,
} from './RegistrationPage.styled';

const RegistrationPage = () => {
  return (
    <FieldStyled>
      <ContainerStyled>
        <TitleFieldStyled>
          <img src={mainRegister} alt="" width="450" />
          <TextStyled>Finance App</TextStyled>
        </TitleFieldStyled>
        <FormFieldStyled>
          <RegistrationForm />
        </FormFieldStyled>
      </ContainerStyled>
    </FieldStyled>
  );
};

export default RegistrationPage;
