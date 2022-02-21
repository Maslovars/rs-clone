import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ITEM_LEVEL_MAP, ItemType } from '../../constants/items';
import ItemBoard from '../../components/ItemBoard/itemBoard';
import { itemProduce } from '../../reducers/item';
import useItemsSelectors from '../../selectors/itemSelector';

type ItemBoardScreenPropsType = {
    start: boolean;
    onMergeItem: (clickedIndex: number, index: number) => void;
};

function ItemBoardScreen(props: ItemBoardScreenPropsType) {
    const { items } = useItemsSelectors();
    const { start, onMergeItem } = props;
    const [started, setStarted] = useState<boolean>(false);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (started) {
            return;
        }
        if (!start) {
            return;
        }

        setStarted(true);
        setInterval(() => {
            dispatch(itemProduce([ITEM_LEVEL_MAP[1]]));
        }, 4500);
    }, [started, start]);

    const onItemClick = (item: ItemType | null, index: number) => {
        if (!item) {
            setClickedIndex(null);
            return;
        }

        if (clickedIndex === index) {
            setClickedIndex(null);
            return;
        }

        if (clickedIndex !== null) {
            const previousItem = items[clickedIndex];
            if (previousItem !== null) {
                if (previousItem.damage === item.damage) {
                    onMergeItem(clickedIndex, index);
                }

                setClickedIndex(null);

                return;
            }
        }

        setClickedIndex(index);
    };
    return <ItemBoard start={start} items={items} clickedIndex={clickedIndex} onClick={onItemClick} />;
}

export default ItemBoardScreen;
