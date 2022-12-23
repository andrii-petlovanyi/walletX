import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import loginEmail from '../../images/login/loginEmail.svg';
import loginPassword from '../../images/login/loginPassword.svg';
import operations from '../../redux/auth/auth-operations';
import {
  FormStyed,
  ImgStyed,
  LinkStyled,
} from 'components/RegistrationForm/styled';
import { Box } from 'components/Box';
import Logo from 'components/Logo/Logo';
import error from 'components/Toasts/error';

function LoginForm({ isLoading }) {
  const dispatch = useDispatch();

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

  const onSubmit = async e => {
    e.preventDefault();

    const finalData = {
      email: credentials.email,
      password: credentials.password,
    };

    try {
      const res = await dispatch(signIn(finalData));
      if (res.payload === 403) return error('Password is incorrect!');
      if (res.payload === 404)
        return error(
          `User with email ${finalData.email} not found`
        );
      reset();
    } catch (error) { }
  };

  const reset = () => {
    setCredentials({
      email: '',
      password: '',
    });
  };

  return (
    <>
      <FormStyed
        style={{
          height: '468px',
        }}
        onSubmit={onSubmit}
      >
        <Box
          m="0px auto"
          height="40px"
          width="181px"
          style={{
            marginBottom: '60px',
          }}
        >
          <Logo />
        </Box>
        <label htmlFor="">
          <ImgStyed src={loginEmail} alt="lock" />
          <input
            type="text"
            name="email"
            onChange={onChange}
            value={credentials.email}
            placeholder="E-mail"
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
            placeholder="Password"
            required
          />
        </label>

        <button type="submit" disabled={isLoading} onSubmit={onSubmit}>
          LOG IN
        </button>
        <LinkStyled to="/register">REGISTER</LinkStyled>
      </FormStyed>
    </>
  );
}

export default LoginForm;
