import { ITEM_LEVEL_MAP, ItemType, ProduceLevelType } from '../constants/items';
import { RUNE_BUY, RUNE_TYPE_ITEM_PRODUCE_LEVEL, RunesListType } from "../constants/runes";

export type InitialItemType = {
    items: (ItemType | null)[];
    dps: number;
    produceLevel: ProduceLevelType;
};

export const itemProduce = (items: (ItemType | null)[], dps: number) => {
    return {
        type: 'ITEM/ITEM_PRODUCE',
        payload: { items, dps },
    } as const;
};

export const itemMerge = (
    items: ItemType[],
    dps: number,
    fromIndex: number,
    toIndex: number,
) => {
    return {
        type: 'ITEM/ITEM_MERGE',
        payload: {
            items,
            dps,
            fromIndex,
            toIndex,
        },
    } as const;
};

export const itemBuy = (rune: RunesListType, produceLevel: ItemType) => {
    return {
        type: 'RUNE_BUY',
        payload: { rune, produceLevel },
    } as const;
};

export type ActionsItemType =
    | ReturnType<typeof itemProduce>
    | ReturnType<typeof itemMerge>
    | ReturnType<typeof itemBuy>;

const initialItems = [...new Array(15)].map((k, i) => {
    if (i < 2) {
        return ITEM_LEVEL_MAP[1];
    }
    return null;
});

const calculateDPS = (items: (ItemType | null)[]) => {
    return items.reduce((acc, item) => {
        if (item) {
            acc += item.damage;
        }
        return acc;
    }, 0);
};

const initialStateItem: InitialItemType = {
    items: initialItems,
    dps: calculateDPS(initialItems),
    produceLevel: 1,
};

export const itemReducer = (
    state: InitialItemType = initialStateItem,
    action: ActionsItemType
): InitialItemType => {
    switch (action.type) {
        case 'ITEM/ITEM_PRODUCE': {
            const firstEmptyIndex = state.items.indexOf(null);

            if (firstEmptyIndex < 0) {
                return {
                    ...state,
                };
            }

            const clone = [...state.items];
            clone[firstEmptyIndex] = ITEM_LEVEL_MAP[state.produceLevel];

            return {
                ...state,
                items: clone,
                dps: calculateDPS(clone),
            };
        }
        case 'ITEM/ITEM_MERGE': {
            const future = [...state.items];
            const item = future[action.payload.fromIndex];
            const itemIndexes = Object.keys(ITEM_LEVEL_MAP).map(Number) as ProduceLevelType[];

            if (item !== null) {
                const indexOfPreviousItem = itemIndexes.indexOf(
                    item.damage,
                ) as ProduceLevelType;
                future[action.payload.toIndex] = ITEM_LEVEL_MAP[itemIndexes[indexOfPreviousItem + 1]];
                future[action.payload.fromIndex] = null;
            }
            return {
                ...state,
                items: future,
                dps: calculateDPS(future),
            };
        }

        /*
        |  Runes
        */

        case RUNE_BUY:
            const { rune } = action.payload
            if (action.payload.rune.type === RUNE_TYPE_ITEM_PRODUCE_LEVEL) {
                const itemIndexes = Object.keys(ITEM_LEVEL_MAP).map(Number) as ProduceLevelType[];

                return {
                    ...state,
                    produceLevel: itemIndexes[rune.owned + 1]
                }
            }
            return {
                ...state,
            }

    default:
        return state
    }
}
