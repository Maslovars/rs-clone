import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { coinReducer } from '../reducers/coin';
import { itemReducer } from '../reducers/item';
import { popupReducer } from '../reducers/popup';
import { monsterReducer } from '../reducers/monster';
import { sheetReducer } from '../reducers/sheet';
import { runeReducer } from '../reducers/rune';
import { appReducer } from '../reducers/app';

export const rootReducer = combineReducers({
    coin: coinReducer,
    item: itemReducer,
    popup: popupReducer,
    monster: monsterReducer,
    sheet: sheetReducer,
    rune: runeReducer,
    app: appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// @ts-ignore
window.store = store;
