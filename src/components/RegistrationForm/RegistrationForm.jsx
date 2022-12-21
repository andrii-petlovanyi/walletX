import React from 'react';
import {
  FormStyed,
  ImgStyed,
  LinkStyled,
  // IndicatorBarWrapper,
  // IndicatorBar,
} from './styled';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import Logo from 'components/Logo/Logo';
import { Box } from 'components/Box';

import emailImg from 'images/registration/mail.svg';
import lockImg from 'images/registration/lock.svg';
import lock2Img from 'images/registration/lock-2.svg';
import personImg from 'images/registration/person.svg';
import { useState } from 'react';

const RegistrationForm = () => {
  const [parol, setParol] = useState('');
  const [parol1, setParol1] = useState('');

  const dispatch = useDispatch();
  const { signUp } = operations;

  const checkPassword = () => {
    if (JSON.stringify(parol) !== JSON.stringify(parol1)) {
      return false;
    }
    return true;
  };

  const onChangePassword = e => {
    setParol(e.target.value);
  };

  const onChangePassword1 = e => {
    setParol1(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const checked = checkPassword();
    if (!checked) {
      alert('Пароли не совпадают!');
      return;
    }

    const form = e.currentTarget;
    const res = await dispatch(
      signUp({
        username: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log('res', res);
    form.reset();
  };

  return (
    <FormStyed onSubmit={onSubmit}>
      <Box m="0px auto" height="40px" width="181px">
        <Logo />
      </Box>
      <label>
        <ImgStyed src={emailImg} alt="" />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </label>
      <label>
        <ImgStyed src={lockImg} alt="" />
        <input
          onChange={onChangePassword1}
          type="password"
          name="password"
          placeholder="Password"
          value={parol1}
          required
          pattern=".{6,}"
          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$"
        />
      </label>
      <label>
        <ImgStyed src={lock2Img} alt="" />
        <input
          value={parol}
          onChange={onChangePassword}
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm password"
          required
          pattern=".{6,}"
          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$"
        />
        {parol.length > 0 && (
          <Box
            maxWidth="180px"
            overflow="hidden"
            backgroundColor="#e5f1e9"
            mt="5px"
            borderRadius="20px"
          >
            <Box
              width={`${parol.length * 30}px`}
              backgroundColor={checkPassword() ? '#28ce65' : '#e6ed17'}
              height="5px"
            />
          </Box>
        )}
      </label>
      <label>
        <ImgStyed src={personImg} alt="" />
        <input
          type="text"
          name="name"
          placeholder="First name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>

      <button type="submit">Register</button>
      <LinkStyled to="/login">Log-In</LinkStyled>
    </FormStyed>
  );
};

export default RegistrationForm;
