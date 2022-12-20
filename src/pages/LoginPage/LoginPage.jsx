import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { FieldStyled, FormFieldStyled, TitleFieldStyled } from 'pages/RegistrationPage/RegistrationPage.styled';
import loginGroupDesk from 'images/login/loginGroupDesk.svg'

function LoginPage() {

    return (
        <FieldStyled>
            <TitleFieldStyled>
                <img src={loginGroupDesk} alt="" width="436" />
            </TitleFieldStyled>
            <FormFieldStyled>
                <LoginForm />
            </FormFieldStyled>
        </FieldStyled>
    )
}

export default LoginPage;