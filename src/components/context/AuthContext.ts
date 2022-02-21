import { createContext } from 'react';
import noop from 'noop-ts';

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
});