import { createContext } from 'react';
import noop from 'noop-ts';

const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
});

export default AuthContext;
