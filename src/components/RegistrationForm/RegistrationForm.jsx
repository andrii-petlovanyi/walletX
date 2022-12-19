import React from 'react';
import { FormStyed } from './styled';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
// import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { signUp } = operations;
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
      <h2>Wallet</h2>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input
        type="password"
        name="ConfirmPassword"
        placeholder="Confirm password"
      />
      <input type="text" name="name" placeholder="name" />
      <button type="submit">Register</button>
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
