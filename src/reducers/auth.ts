import {
    AUTH_LOGIN_FAIL,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT_SUCCESS,
} from '../constants';

export type InitialAuthType = {
    user: object;
    username: string;
    notifications: object;
    loggedInId: string;
    token: string;
    loggingIn: boolean;
    loggedIn: boolean;
    loginFailed: boolean;
};

export const authLoginRequest = () => {
    return {
        type: AUTH_LOGIN_REQUEST,
    } as const;
};

export const authLoginSuccess = (logIn: boolean) => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        payload: {
            logIn,
        },
    };
};

export const authLoginFail = (error: string) => {
    return {
        type: AUTH_LOGIN_FAIL,
        payload: {
            error,
        },
    };
};

export const authLogoutSuccess = (logIn: boolean) => {
    return {
        type: AUTH_LOGOUT_SUCCESS,
        payload: {
            logIn,
        },
    };
};

export type ActionsAuthType =
    | ReturnType<typeof authLoginRequest>
    | ReturnType<typeof authLoginSuccess>
    | ReturnType<typeof authLoginFail>
    | ReturnType<typeof authLogoutSuccess>;

const initialStateAuth: InitialAuthType = {
    user: {},
    username: '',
    notifications: {},
    loggedInId: '',
    token: '',
    loggingIn: false,
    loggedIn: false,
    loginFailed: false,
};

export const authReducer = (
    // eslint-disable-next-line default-param-last
    state: InitialAuthType = initialStateAuth,
    action: ActionsAuthType,
): InitialAuthType => {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST: {
            return {
                ...state,
                loggingIn: true,
                loginFailed: false,
            };
        }

        case AUTH_LOGIN_SUCCESS: {
            return {
                ...state,
                ...action.payload,
                loggingIn: false,
                loginFailed: false,
                loggedIn: true,
            };
        }

        case AUTH_LOGIN_FAIL: {
            return {
                ...state,
                ...action.payload,
                loggingIn: false,
                loggedIn: false,
            };
        }

        case AUTH_LOGOUT_SUCCESS: {
            return {
                ...initialStateAuth,
            };
        }

        default:
            return state;
    }
};
