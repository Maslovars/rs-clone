import { POPUP_CLOSE, POPUP_OPEN } from '../constants';

export type InitialPopupType = {
    open: boolean | null;
};

export const openPopup = (open: boolean | null) => {
    return {
        type: POPUP_OPEN,
        payload: { open },
    };
};

export const closePopup = (open: boolean | null = false) => {
    return {
        type: POPUP_CLOSE,
        payload: { open },
    };
};

export type ActionsPopupType =
    | ReturnType<typeof openPopup>
    | ReturnType<typeof closePopup>;

const initialStatePopup: InitialPopupType = {
    open: null,
};

export const popupReducer = (
    state: InitialPopupType = initialStatePopup,
    action: ActionsPopupType,
): InitialPopupType => {
    switch (action.type) {
        case POPUP_OPEN: {
            return {
                ...state,
                open: action.payload.open,
            }
        }

        case POPUP_CLOSE: {
            return {
                ...state,
                open: false,
            };
        }

    default:
        return state;
    }
};
