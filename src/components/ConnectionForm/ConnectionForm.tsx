import React, { useContext, useEffect, useState } from 'react';
import './ConnectionForm.scss';
import { AuthContext } from '../context/AuthContext';
import useHttp from '../hooks/http.hook';
import useMessage from '../hooks/message.hook';
import loginBtn from '../../assets/connectionForm/login-btn.png';
import registerBtn from '../../assets/connectionForm/register-btn.png';

function ConnectionForm() {
    const { load, error, request, clearError } = useHttp();
    const message = useMessage();
    const auth = useContext(AuthContext);
    const [form, setForm] = useState({
        userName: '',
        password: ''
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const registerHandler = async () => {
        try {
            const data = await request('api/auth/register', 'POST', { ...form });
            message(data.message);
        } catch (err) {}
    };

    const loginHandler = async () => {
        try {
            const data = await request('api/auth/login', 'POST', { ...form });
            auth.login(data.token, data.userId);
        } catch (err) {}
    };

    return (
        <div className="connection-form">
            <div className="connection-form__inputs">
                <div className="connection-form__inputs-wrapper">
                    <label className="connection-form__label" htmlFor="userName">
                        Name
                    </label>
                    <input
                        placeholder="Enter your name"
                        id="userName"
                        type="text"
                        className="browser-default connection-form__input"
                        name="userName"
                        onChange={changeHandler}
                    />
                </div>
                <div className="connection-form__inputs-wrapper">
                    <label className="connection-form__label" htmlFor="password">
                        Password
                    </label>
                    <input
                        placeholder="Enter your password"
                        id="password"
                        type="password"
                        className="browser-default connection-form__input"
                        name="password"
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className="connection-form__btns">
                <button className="connection-form__btn" onClick={loginHandler} disabled={load}>
                    <img src={loginBtn} alt="login-button" />
                </button>
                <button className="connection-form__btn" onClick={registerHandler} disabled={load}>
                    <img src={registerBtn} alt="register-button" />
                </button>
            </div>
        </div>
    );
}

export default ConnectionForm;
