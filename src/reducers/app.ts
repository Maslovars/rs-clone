import {
    APP_LOAD_SUCCESS,
    AUTH_LOGOUT_SUCCESS,
    CHANGE_LANGUAGE,
    LANGUAGE_DEFAULT,
    LANGUAGE_EN
} from '../constants';

export type InitialAppType = {
    language: string;
};

export const changeLanguage = (language: string) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: { language },
    } as const;
};

export const appLoadSuccess = (loadingRequest: string) => {
    return {
        type: APP_LOAD_SUCCESS,
        payload: { loadingRequest },
    } as const;
};

export const authLogoutSuccess = (language: string) => {
    return {
        type: AUTH_LOGOUT_SUCCESS,
        payload: { language },
    } as const;
};

export type ActionsAppType =
    | ReturnType<typeof changeLanguage>
    | ReturnType<typeof appLoadSuccess>
    | ReturnType<typeof authLogoutSuccess>;

const initialStateApp: InitialAppType = {
    language: LANGUAGE_DEFAULT,
};

export const appReducer = (
    state: InitialAppType = initialStateApp,
    action: ActionsAppType,
): InitialAppType => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: LANGUAGE_EN,
            };

        case APP_LOAD_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };

        case AUTH_LOGOUT_SUCCESS:
            return {
                ...initialStateApp,
            }

        default:
            return state;
    }
};
