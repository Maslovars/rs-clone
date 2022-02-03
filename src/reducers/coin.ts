import {RUNE_BUY, RUNE_TYPE_GOLD_INCOME, RunesListType} from '../constants/runes';

export type InitialCoinType = {
    coins: number;
    multiplier: number;
};

export const coinReceived = (coins: number) => {
    return {
        type: 'COIN/COIN_RECEIVED',
        payload: { coins },
    } as const;
};

export const coinSpent = (coins: number) => {
    return {
        type: 'COIN/COIN_SPENT',
        payload: { coins },
    } as const;
};
export const coinBuy = (multiplier: number, rune: RunesListType) => {
    return {
        type: 'RUNE_BUY',
        payload: { multiplier, rune },
    } as const;
};

export type ActionsCoinType =
    | ReturnType<typeof coinReceived>
    | ReturnType<typeof coinSpent>
    | ReturnType<typeof coinBuy>;

const initialStateCoin: InitialCoinType = {
    coins: 0,
    multiplier: 1,
};

export const coinReducer = (
    state: InitialCoinType = initialStateCoin,
    action: ActionsCoinType
): InitialCoinType => {
    switch (action.type) {
        case 'COIN/COIN_RECEIVED':
            return {
                ...state,
                coins: Math.round(
                    state.coins + action.payload.coins * state.multiplier,
                ),
            };

        case 'COIN/COIN_SPENT':
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
