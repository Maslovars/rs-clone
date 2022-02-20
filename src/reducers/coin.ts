import {
    RUNE_BUY,
    RUNE_TYPE_GOLD_INCOME,
    RunesListType,
} from '../constants/runes';
import { COIN_RECEIVED, COIN_SPENT } from '../constants';

export type InitialCoinType = {
    coins: number;
    multiplier: number;
};

export const coinReceived = (coins: number) => {
    return {
        type: COIN_RECEIVED,
        payload: {
            coins,
        },
    } as const;
};

export const coinSpent = (coins: number) => {
    return {
        type: COIN_SPENT,
        payload: {
            coins,
        },
    } as const;
};

export const runeBuy = (rune: RunesListType) => {
    return {
        type: RUNE_BUY,
        payload: {
            rune,
        },
    } as const;
};

export type ActionsCoinType =
    | ReturnType<typeof coinReceived>
    | ReturnType<typeof coinSpent>
    | ReturnType<typeof runeBuy>;

const initialStateCoin: InitialCoinType = {
    coins: 0,
    multiplier: 1,
};

export const coinReducer = (
    // eslint-disable-next-line default-param-last
    state: InitialCoinType = initialStateCoin,
    action: ActionsCoinType,
): InitialCoinType => {
    switch (action.type) {
        case COIN_RECEIVED:
            return {
                ...state,
                coins: Math.round(
                    state.coins + action.payload.coins * state.multiplier,
                ),
            };

        case COIN_SPENT:
            return {
                ...state,
                coins: Math.floor(state.coins - action.payload.coins),
            };

        case RUNE_BUY: {
            const { rune } = action.payload;

            if (action.payload.rune.type === RUNE_TYPE_GOLD_INCOME) {
                return {
                    ...state,
                    multiplier: 1 + (rune.multiplier - 1) * (rune.owned + 1),
                };
            }

            return {
                ...state,
            };
        }

        default:
            return state;
    }
};
