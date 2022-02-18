import active_4 from '../assets/runes/active_4.png';
import passive_5 from '../assets/runes/passive_5.png';
import sword_1 from '../assets/runes/sword_1.png';
import sword_2 from '../assets/runes/sword_2.png';

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
    icon: string;
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
        icon: active_4,
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
        icon: passive_5,
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
        icon: sword_1,
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
        icon: sword_2,
        owned: 0,
        price: 150,
        description: 'Increases crit damage',
        base: 100,
        multiplier: 1.1,
        priceMultiplier: 3,
        informer: 'percent',
    },
];
