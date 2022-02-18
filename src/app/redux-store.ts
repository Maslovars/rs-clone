import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { coinReducer } from '../reducers/coin';
import { itemReducer } from '../reducers/item';
import { popupReducer } from '../reducers/popup';
import { monsterReducer } from '../reducers/monster';
import { sheetReducer } from '../reducers/sheet';
import { runeReducer } from '../reducers/rune';
import { appReducer } from '../reducers/app';
import { authReducer } from '../reducers/auth';

export const rootReducer = combineReducers({
    coin: coinReducer,
    item: itemReducer,
    popup: popupReducer,
    monster: monsterReducer,
    sheet: sheetReducer,
    rune: runeReducer,
    app: appReducer,
    auth: authReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

// export type GetAppStateType = () => AppStateType;

// type AppActionsType =
// | ActionsCoinType
// | ActionsItemType
// | ActionsMonsterType
// | ActionsSheetType
// | ActionsAppType
// | ActionsAuthType
// | ActionsPopupType;

// export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

// @ts-ignore
window.store = store;
