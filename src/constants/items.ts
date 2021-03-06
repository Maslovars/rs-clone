import armor from '../assets/weapons/armor.png';
import helmet from '../assets/weapons/helmet.png';
import sword from '../assets/weapons/sword.png';
import swordWood from '../assets/weapons/swordWood.png';
import upgAxe from '../assets/weapons/upg_axe.png';
import upgAxeDouble from '../assets/weapons/upg_axeDouble.png';
import upgBow from '../assets/weapons/upg_bow.png';
import upgHelmet from '../assets/weapons/upg_helmet.png';
import upgSpear from '../assets/weapons/upg_spear.png';
import upgShieldSmall from '../assets/weapons/upgShieldSmall.png';
import wand from '../assets/weapons/wand.png';

export const COIN_RECEIVE_SHOW_DURATION = 500;

export type ProduceLevelType = 1 | 2 | 5 | 12 | 26 | 60 | 150 | 350 | 750 | 2000 | 5000;

export type ItemType = {
    damage: ProduceLevelType;
    icon: string;
    coins: number;
};

export type ItemLevelMapType = {
    1: ItemType;
    2: ItemType;
    5: ItemType;
    12: ItemType;
    26: ItemType;
    60: ItemType;
    150: ItemType;
    350: ItemType;
    750: ItemType;
    2000: ItemType;
    5000: ItemType;
};

export const ITEM_LEVEL_MAP: ItemLevelMapType = {
    1: {
        damage: 1,
        icon: swordWood,
        coins: 1
    },
    2: {
        damage: 2,
        icon: sword,
        coins: 2
    },
    5: {
        damage: 5,
        icon: upgBow,
        coins: 5
    },
    12: {
        damage: 12,
        icon: upgSpear,
        coins: 10
    },
    26: {
        damage: 26,
        icon: upgAxeDouble,
        coins: 20
    },
    60: {
        damage: 60,
        icon: upgAxe,
        coins: 30
    },
    150: {
        damage: 150,
        icon: helmet,
        coins: 40
    },
    350: {
        damage: 350,
        icon: armor,
        coins: 50
    },
    750: {
        damage: 750,
        icon: wand,
        coins: 60
    },
    2000: {
        damage: 2000,
        icon: upgShieldSmall,
        coins: 70
    },
    5000: {
        damage: 5000,
        icon: upgHelmet,
        coins: 80
    }
};
