import { RUNE_BUY, RUNES_LIST, RunesListType } from '../constants/runes';

export type InitialRuneType = {
    runes: RunesListType[];
};

export const runeBuy = (rune: RunesListType) => {
    return {
        type: RUNE_BUY,
        payload: { rune },
    };
};

export type ActionsRuneType = ReturnType<typeof runeBuy>;

const initialStateRune: InitialRuneType = {
    runes: RUNES_LIST,
};

export const runeReducer = (
    state: InitialRuneType = initialStateRune,
    action: ActionsRuneType,
): InitialRuneType => {
    switch (action.type) {
    case RUNE_BUY:
        const { rune } = action.payload;

        const index = state.runes.findIndex((r) => r.type === rune.type);
        const clone = [...state.runes];
        clone[index] = {
            ...rune,
            owned: rune.owned + 1,
            price: rune.price * rune.priceMultiplier,
        };

        return {
            runes: clone,
        };

    default:
        return state;
    }
};

