import { useSelector } from 'react-redux';
import { AppStateType } from '../app/redux-store';
import { ItemType } from '../constants/items';

export type ItemsType = (ItemType | null)[];

interface ItemsSelector {
    items: ItemsType;
}

const ItemsSelectors = (state: AppStateType) => {
    return {
        items: state.item.items
    };
};

const useItemsSelectors = (): ItemsSelector => {
    return useSelector<AppStateType, ItemsSelector>(ItemsSelectors);
};

export default useItemsSelectors;
