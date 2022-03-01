import { POPUP_CLOSE, POPUP_OPEN } from '../constants';

export type InitialPopupType = {
    open: string | null;
};

export const openPopup = (open: string | null) => {
    return {
        type: POPUP_OPEN,
        payload: {
            open
        }
    } as const;
};

export const closePopup = () => {
    return {
        type: POPUP_CLOSE
    } as const;
};

export type ActionsPopupType = ReturnType<typeof openPopup> | ReturnType<typeof closePopup>;

const initialStatePopup: InitialPopupType = {
    open: null
};

export const popupReducer = (state: InitialPopupType = initialStatePopup, action: ActionsPopupType): InitialPopupType => {
    switch (action.type) {
        case POPUP_OPEN: {
            return {
                ...state,
                open: action.payload.open
            };
        }

        case POPUP_CLOSE: {
            return {
                ...state,
                open: null
            };
        }

        default:
            return state;
    }
};
