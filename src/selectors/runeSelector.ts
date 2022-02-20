import { useSelector } from 'react-redux';
import { AppStateType } from '../app/redux-store';
import { RunesListType } from '../constants/runes';

interface RunesSelector {
    runes: RunesListType[];
}

const RuneSelector = (state: AppStateType) => {
    return {
        runes: state.rune.runes,
    };
};

const useRuneSelectors = (): RunesSelector => {
    return useSelector<AppStateType, RunesSelector>(RuneSelector);
};

export default useRuneSelectors;
