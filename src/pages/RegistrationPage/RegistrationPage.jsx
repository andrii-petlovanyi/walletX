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
import ImgWrapAnim from 'components/Animations/ImgWrapAnim';
import SectionAnim from 'components/Animations/SectionAnim';

const RegistrationPage = () => {
  return (
    <FieldStyled>
      <ContainerStyled>
        <TitleFieldStyled>
          <ImgWrapAnim>
            <img src={mainRegister} alt="" width="450" />
          </ImgWrapAnim>
          <SectionAnim delay={0.1}>
            <TextStyled>Finance App</TextStyled>
          </SectionAnim>
        </TitleFieldStyled>
        <FormFieldStyled>
          <SectionAnim delay={0.3}>
            <RegistrationForm />
          </SectionAnim>
        </FormFieldStyled>
      </ContainerStyled>
    </FieldStyled>
  );
};

export default RegistrationPage;
