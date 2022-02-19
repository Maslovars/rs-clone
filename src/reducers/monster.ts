import {
    MONSTER_DIE,
    MONSTER_UPDATE,
    MONSTERS_MAP,
    objMonsterType,
    STARTING_LEVEL,
} from '../constants';

export type InitialMonsterType = {
    monster: { [key: number]: objMonsterType };
};

export const monsterUpdate = (monster: { [key: number]: objMonsterType }) => {
    return {
        type: MONSTER_UPDATE,
        payload: {
            monster,
        },
    } as const;
};

export const monsterDie = (
    key: number,
    monster: { [key: number]: objMonsterType },
) => {
    return {
        type: MONSTER_DIE,
        payload: {
            key,
            monster,
        },
    };
};

export type ActionsMonsterType =
    | ReturnType<typeof monsterUpdate>
    | ReturnType<typeof monsterDie>;

const initialStateMonster: InitialMonsterType = {
    monster: MONSTERS_MAP[STARTING_LEVEL],
};

export const monsterReducer = (
    // eslint-disable-next-line default-param-last
    state: InitialMonsterType = initialStateMonster,
    action: ActionsMonsterType,
): InitialMonsterType => {
    switch (action.type) {
        case MONSTER_UPDATE:
            return {
                ...state,
                monster: action.payload.monster,
            };

        case MONSTER_DIE:
            return {
                ...state,
                monster: MONSTERS_MAP[action.payload.key],
            };

        default:
            return state;
    }
};
