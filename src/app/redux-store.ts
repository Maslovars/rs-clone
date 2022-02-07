import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { coinReducer } from "../reducers/coin";
import { itemReducer } from "../reducers/item";
import { popupReducer } from "../reducers/popup";

export const rootReducer = combineReducers({
    coin: coinReducer,
    item: itemReducer,
    popup: popupReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type GetAppStateType = () => AppStateType;

// type AppActionsType =
   // | ActionsCoinType
   // | ActionsItemType
   // | ActionsPopupType;

// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

//@ts-ignore
window.store = store;
