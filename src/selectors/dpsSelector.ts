import { useSelector } from 'react-redux';
import { AppStateType } from '../app/redux-store';

interface DpsSelector {
    dps: number;
}

const DpsSelectors = (state: AppStateType) => {
    return {
        dps: state.item.dps
    };
};

const useDpsSelectors = (): DpsSelector => {
    return useSelector<AppStateType, DpsSelector>(DpsSelectors);
};

export default useDpsSelectors;
