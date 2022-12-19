import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import loginWalletDesk from '../../images/login/loginWalletDesk.svg';
import loginEmail from '../../images/login/loginEmail.svg';
import loginPassword from '../../images/login/loginPassword.svg'
import operations from '../../redux/auth/auth-operations';


function LoginForm({ isLoading }) {
    const { signIn } = operations;
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();

    const onChange = e => {
        const { name, value } = e.target;

        setCredentials(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

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
        <form onSubmit={onSubmit}>
            <div>
                <img src={loginWalletDesk} alt="wallet" width="40" />
                <h2>Wallet</h2>
            </div>
            <label htmlFor="">
                <img src={loginEmail} alt="lock" />
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
                <img src={loginPassword} alt="lock" />
                <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={credentials.password}
                    placeholder='Password'
                    required
                />
            </label>

            <button type="submit" disabled={isLoading}>LOG IN</button>
            <button type="submit" disabled={isLoading}>REGISTER</button>
        </form>
    );
}

export default LoginForm;