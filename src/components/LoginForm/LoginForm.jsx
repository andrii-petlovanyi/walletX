import React, { useState } from 'react';
import loginWalletDesk from '../../images/login/loginWalletDesk.svg';
import loginEmail from '../../images/login/loginEmail.svg';
import loginPassword from '../../images/login/loginPassword.svg'

// import { useDispatch } from 'react-redux';

// import { signIn } from 'redux/userSlice/operations';

function LoginForm({ isLoading }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    // const dispatch = useDispatch();

    const onChange = e => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmit = e => {
        e.preventDefault();

        // const finalData = {
        //     email: formData.email,
        //     password: formData.password,
        // };

        // dispatch(signIn(finalData));
        reset();
    };

    const reset = () => {
        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <form onSubmit={onSubmit}>
            <img src={loginWalletDesk} alt="wallet" width="40" />
            <h2>Wallet</h2>
            <label htmlFor="">
                <img src={loginEmail} alt="lock" />
                <input
                    type="text"
                    name="email"
                    onChange={onChange}
                    value={formData.email}
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
                    value={formData.password}
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