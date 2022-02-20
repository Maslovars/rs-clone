import { useSelector } from 'react-redux';
import { AppStateType } from '../app/redux-store';
import { objMonsterType } from '../constants';

interface MonsterSelectors {
    monster: objMonsterType;
}

const MonsterSelector = (state: AppStateType) => {
    return {
        monster: state.monster.monster,
    };
};

const useMonsterSelectors = (): MonsterSelectors => {
    return useSelector<AppStateType, MonsterSelectors>(MonsterSelector);
};

export default useMonsterSelectors;
