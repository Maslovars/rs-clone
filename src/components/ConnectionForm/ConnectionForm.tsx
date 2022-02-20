import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import useHttp from '../hooks/http.hook';



const ConnectionForm = () => {
    const { load, error, request, clearError } = useHttp();
    // const message = useMessage();
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
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('api/auth/register', 'POST', { ...form });
            // console.log('Data:', data);
            message(data.message);
        } catch (err) { }
    }

    const loginHandler = async () => {
        try {
            const data = await request('api/auth/login', 'POST', { ...form });
            auth.login(data.token, data.userId);
        } catch (err) { }
    }

    return (
        <div className="connection-form">
            <h2 className="connection-form__title">welcome</h2>
            <div>
                <label htmlFor="userName">Name</label>
                <input
                    placeholder="Enter your name"
                    id="userName"
                    type="text"
                    className="connection-form__input"
                    name='userName'
                    onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
                <input
                    placeholder="Enter your password"
                    id="password"
                    type="password"
                    className="connection-form__input"
                    name='password'
                    onChange={changeHandler}
                />
            </div>

        </div>
    )
};

export default ConnectionForm;
