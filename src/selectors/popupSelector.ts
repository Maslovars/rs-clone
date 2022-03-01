import { useSelector } from 'react-redux';
import { AppStateType } from '../app/redux-store';
import { InitialPopupType } from '../reducers/popup';

interface PopupSelector {
    popup: InitialPopupType;
}

const PopupsSelector = (state: AppStateType) => {
    return {
        popup: state.popup
    };
};

const usePopupSelectors = (): PopupSelector => {
    return useSelector<AppStateType, PopupSelector>(PopupsSelector);
};

export default usePopupSelectors;
