import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import loginEmail from '../../images/login/loginEmail.svg';
import loginPassword from '../../images/login/loginPassword.svg'
import operations from '../../redux/auth/auth-operations';
import { FormStyed, ImgStyed } from 'components/RegistrationForm/styled';
import { Box } from 'components/Box';
import Logo from 'components/Logo/Logo';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';


function LoginForm({ isLoading }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { signIn } = operations;
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const onChange = e => {
        const { name, value } = e.target;

        setCredentials(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onClickRegister = () => {
        navigate('/register');
    }

    const onSubmit = e => {
        e.preventDefault();

        const finalData = {
            email: credentials.email,
            password: credentials.password,
        };

        dispatch(signIn(finalData));
        reset();
    };

    const reset = () => {
        setCredentials({
            email: '',
            password: '',
        });
    };

    return (
        <FormStyed onSubmit={onSubmit}>
            <Box m="0px auto" height="40px" width="181px">
                <Logo />
            </Box>
            <label htmlFor="">
                <ImgStyed src={loginEmail} alt="lock" />
                <input
                    type="text"
                    name="email"
                    onChange={onChange}
                    value={credentials.email}
                    placeholder='E-mail'
                    required
                />
            </label>

            <label htmlFor="">
                <ImgStyed src={loginPassword} alt="lock" />
                <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={credentials.password}
                    placeholder='Password'
                    required
                />
            </label>

            <button type="submit" disabled={isLoading} onSubmit={onSubmit}>LOG IN</button>
            <button disabled={isLoading} onClick={onClickRegister}>REGISTER</button>
        </FormStyed>
    );
}

export default LoginForm;