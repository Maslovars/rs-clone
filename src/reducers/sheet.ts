import {
    RUNE_BUY,
    RUNE_TYPE_DAMAGE_CRIT_MULTI,
    RUNE_TYPE_DAMAGE_CRIT_RATE,
    RunesListType,
} from '../constants/runes';

export type InitialSheetType = {
    critRate: number;
    critDamage: number;
};

export const runeBuy = (rune: RunesListType) => {
    return {
        type: RUNE_BUY,
        payload: { rune },
    };
};

export type ActionsSheetType = ReturnType<typeof runeBuy>;

const initialStateSheet: InitialSheetType = {
    critRate: 5,
    critDamage: 2,
};

export const sheetReducer = (
    // eslint-disable-next-line default-param-last
    state: InitialSheetType = initialStateSheet,
    action: ActionsSheetType,
): InitialSheetType => {
    switch (action.type) {
        case RUNE_BUY:
            if (action.payload.rune.type === RUNE_TYPE_DAMAGE_CRIT_RATE) {
                return {
                    ...state,
                    critRate: state.critRate + 1,
                };
            }

            if (action.payload.rune.type === RUNE_TYPE_DAMAGE_CRIT_MULTI) {
                return {
                    ...state,
                    critDamage: +(
                        state.critDamage * action.payload.rune.multiplier
                    ).toFixed(2),
                };
            }

            return state;

        default:
            return state;
    }
};
