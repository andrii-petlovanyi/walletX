import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { FieldStyled, FormFieldStyled, TextStyled, TitleFieldStyled } from 'pages/RegistrationPage/RegistrationPage.styled';
import loginGroupDesk from 'images/login/loginGroupDesk.svg'
import { Box } from 'components/Box';

function LoginPage() {

    return (
        <FieldStyled>
            <TitleFieldStyled>
                <Box position="relative">
                    <img src={loginGroupDesk} alt="" width="436" />
                    <TextStyled>Finance App</TextStyled>
                </Box>
            </TitleFieldStyled>
            <FormFieldStyled>
                <LoginForm />
            </FormFieldStyled>
        </FieldStyled>
    )
}

export default LoginPage;