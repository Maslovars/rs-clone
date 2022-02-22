import React, { useContext, useEffect, useState } from 'react';
import './ConnectionForm.scss';
import useHttp from '../hooks/http.hook';
import useMessage from '../hooks/message.hook';
import loginBtn from '../../assets/connectionForm/login-btn.png';
import registerBtn from '../../assets/connectionForm/register-btn.png';
import AuthContext from '../context/AuthContext';

function ConnectionForm() {
    const { load, error, request, clearError } = useHttp();
    const message = useMessage();
    const auth = useContext(AuthContext);
    const [show, setShow] = useState(false);
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
            const data = await request('https://rs-clone-serverr.herokuapp.com/api/auth/register', 'POST', { ...form });
            message(data.message);
        } catch (err) {}
    };

    const loginHandler = async () => {
        try {
            const data = await request('https://rs-clone-serverr.herokuapp.com/api/auth/login', 'POST', { ...form });
            auth.login(data.token, data.userId);
        } catch (err) {}
    };

    const showPassword = () => {
        setShow(!show);
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
                        type={show ? 'text' : 'password'}
                        className="browser-default connection-form__input"
                        name="password"
                        onChange={changeHandler}
                    />
                    {show ? (
                        <span aria-hidden onClick={showPassword} className="connection-form__spanOn" />
                    ) : (
                        <span aria-hidden onClick={showPassword} className="connection-form__spanOff" />
                    )}
                </div>
            </div>
            <div className="connection-form__btns">
                <button className="connection-form__btn" onClick={loginHandler} disabled={load} type="button">
                    <img src={loginBtn} alt="login-button" />
                </button>
                <button className="connection-form__btn" onClick={registerHandler} disabled={load} type="button">
                    <img src={registerBtn} alt="register-button" />
                </button>
            </div>
        </div>
    );
}

export default ConnectionForm;
