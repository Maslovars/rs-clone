export const RUNE_TYPE_GOLD_INCOME = 'RUNE_TYPE_GOLD_INCOME';
export const RUNE_TYPE_ITEM_PRODUCE_LEVEL = 'RUNE_TYPE_ITEM_PRODUCE_LEVEL';
export const RUNE_TYPE_DAMAGE_CRIT_RATE = 'RUNE_TYPE_DAMAGE_CRIT_RATE';
export const RUNE_TYPE_DAMAGE_CRIT_MULTI = 'RUNE_TYPE_DAMAGE_CRIT_MULTI';
export const RUNE_BUY = 'RUNE_BUY';

export type RunesListType = {
    name: string;
    type:
        | 'RUNE_TYPE_GOLD_INCOME'
        | 'RUNE_TYPE_ITEM_PRODUCE_LEVEL'
        | 'RUNE_TYPE_DAMAGE_CRIT_RATE'
        | 'RUNE_TYPE_DAMAGE_CRIT_MULTI';
    // icon: ;
    owned: number;
    price: number;
    description: string;
    base: number;
    multiplier: number;
    priceMultiplier: number;
    informer: string;
};

export const RUNES_LIST: RunesListType[] = [
    {
        name: 'Coin Income',
        type: RUNE_TYPE_GOLD_INCOME,
        // icon: ,
        owned: 0,
        price: 15,
        description: 'Increases coin income',
        base: 0,
        multiplier: 1.25,
        priceMultiplier: 3,
        informer: 'percent',
    },
    {
        name: 'Item Level',
        type: RUNE_TYPE_ITEM_PRODUCE_LEVEL,
        // icon: ,
        owned: 0,
        price: 500,
        description: 'Increases level of weapons',
        base: 0,
        multiplier: 1,
        priceMultiplier: 5,
        informer: 'plus',
    },
    {
        name: 'Crit Rate',
        type: RUNE_TYPE_DAMAGE_CRIT_RATE,
        // icon: ,
        owned: 0,
        price: 1000,
        description: 'Increases crit rate',
        base: 5,
        multiplier: 1.01,
        priceMultiplier: 5,
        informer: 'percent',
    },
    {
        name: 'Crit Multiplier',
        type: RUNE_TYPE_DAMAGE_CRIT_MULTI,
        // icon: ,
        owned: 0,
        price: 150,
        description: 'Increases crit damage',
        base: 100,
        multiplier: 1.1,
        priceMultiplier: 3,
        informer: 'percent',
    },
];
