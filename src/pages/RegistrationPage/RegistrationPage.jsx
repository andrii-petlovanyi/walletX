import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import mainRegister from '../images/regitration/mainRegister.svg';
import {
  FieldStyled,
  TitleFieldStyled,
  FormFieldStyled,
} from './RegistrationPage.styled';

const RegistrationPage = () => {
  return (
    <FieldStyled>
      <TitleFieldStyled>
        <img src={mainRegister} alt="" width="450" />
      </TitleFieldStyled>
      <FormFieldStyled>
        <RegistrationForm />
      </FormFieldStyled>
    </FieldStyled>
  );
};

export default RegistrationPage;
