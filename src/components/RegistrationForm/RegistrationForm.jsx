import React from 'react';
import { FormStyed, ImgStyed, IndicatorBar } from './styled';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import Logo from 'components/Logo/Logo';
import { Box } from 'components/Box';

import emailImg from '../../images/regitration/mail.svg';
import lockImg from '../../images/regitration/lock.svg';
import lock2Img from '../../images/regitration/lock-2.svg';
import personImg from '../../images/regitration/person.svg';
import { useState } from 'react';

const RegistrationForm = () => {
  const [parol, setParol] = useState('');
  const [parol1, setParol1] = useState('');

  const dispatch = useDispatch();
  const { signUp } = operations;

  const onChangePassword = e => {
    console.log(e.target.value);
    setParol(e.target.value);
  };

  const onChangePassword1 = e => {
    console.log(e.target.value);
    setParol1(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
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
        <input type="email" name="email" placeholder="E-mail" />
      </label>
      <label>
        <ImgStyed src={lockImg} alt="" />
        <input
          onChange={onChangePassword1}
          type="password"
          name="password"
          placeholder="Password"
          pattern=".{8,}"
          value={parol1}
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
          pattern=".{8,}"
        />
        {parol.length > 0 && (
          <Box width={`${parol.length * 10}px`} color="yellow">
            <IndicatorBar />
          </Box>
        )}
      </label>
      <label>
        <ImgStyed src={personImg} alt="" />
        <input type="text" name="name" placeholder="First name" />
      </label>

      <button type="submit">Register</button>
      <button type="submit">Log-in</button>
      {/* <Link>Log in</Link> */}
    </FormStyed>
  );
};

export default RegistrationForm;

// const RegisterForm = () => {
//   const dispatch = useDispatch();
//   const onSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };
//   return (
//     <Box mt="20px">
//       <LoginFormStyled onSubmit={onSubmit} autoComplete="off">
//         <label>
//           Username
//           <input type="text" name="name" />
//         </label>
//         <label>
//           Email
//           <input type="email" name="email" />
//         </label>
//         <label>
//           Password
//           <input type="password" name="password" />
//         </label>
//         <button type="submit">Register</button>
//         <Box
//           display="flex"
//           mt="10px"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <p>Already have an account?</p>
//           <Link to="/login">Sign in</Link>
//         </Box>
//       </LoginFormStyled>
//     </Box>
//   );
// };
