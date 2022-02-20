import { useSelector } from 'react-redux';
import { AppStateType } from '../app/redux-store';

interface SheetSelector {
    critRate: number;
    critDamage: number;
}

const SheetsSelector = (state: AppStateType) => {
    return {
        critRate: state.sheet.critRate,
        critDamage: state.sheet.critDamage,
    };
};

const useSheetsSelectors = (): SheetSelector => {
    return useSelector<AppStateType, SheetSelector>(SheetsSelector);
};

export default useSheetsSelectors;
