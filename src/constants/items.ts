export const COIN_RECEIVE_SHOW_DURATION = 500;

export type ProduceLevelType =
    | 1
    | 2
    | 5
    | 12
    | 26
    | 60
    | 150
    | 350
    | 750
    | 2000
    | 5000;

export type ItemType = {
    damage: ProduceLevelType;
    // icon: ;
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
    1: { damage: 1, /* icon: , */ coins: 1 },
    2: { damage: 2, /* icon: , */ coins: 2 },
    5: { damage: 5, /* icon: , */ coins: 5 },
    12: { damage: 12, /* icon: , */ coins: 10 },
    26: { damage: 26, /* icon: , */ coins: 20 },
    60: { damage: 60, /* icon: , */ coins: 30 },
    150: { damage: 150, /* icon: , */ coins: 40 },
    350: { damage: 350, /* icon: , */ coins: 50 },
    750: { damage: 750, /* icon: , */ coins: 60 },
    2000: { damage: 2000, /* icon: , */ coins: 70 },
    5000: { damage: 5000, /* icon: , */ coins: 80 },
};
