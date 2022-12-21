import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import mainRegister from 'images/registration/mainRegister.svg';
import {
  FieldStyled,
  TitleFieldStyled,
  FormFieldStyled,
  TextStyled,
} from './RegistrationPage.styled';
import { Box } from 'components/Box';

const RegistrationPage = () => {
  return (
    <FieldStyled>
      <TitleFieldStyled>
        <Box position="relative">
          <img src={mainRegister} alt="" width="450" />
          <TextStyled>Finance App</TextStyled>
        </Box>
      </TitleFieldStyled>
      <FormFieldStyled>
        <RegistrationForm />
      </FormFieldStyled>
    </FieldStyled>
  );
};

export default RegistrationPage;
