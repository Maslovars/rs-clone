import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../app/redux-store';
import { ItemType } from '../../constants/items';
import ItemBoard from '../../components/ItemBoard/itemBoard';
import { ITEM_PRODUCE } from '../../constants';

type ItemBoardScreenPropsType = {
    start: boolean;
    onMergeItem: (clickedIndex: number, index: number) => void;
    onReceiveCoin: (coins: number) => void;
};

const ItemBoardScreen = (props: ItemBoardScreenPropsType) => {
    const items = useSelector<AppStateType, (ItemType | null)[]>(
        (state) => state.item.items,
        );

    const { onReceiveCoin, start, onMergeItem } = props;
    const [started, setStarted] = useState<boolean>(false);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const dispatch = useDispatch();

    function produceItem() {
        dispatch({
            type: ITEM_PRODUCE,
            payload: { items: [] },
        });
    }

    function listen() {
        setStarted(true);
        return setInterval(() => {
            produceItem();
        }, 4500);
    }

    useEffect(() => {
        if (started) {
            return;
        }
        if (!start) {
            return;
        }
        const id = listen();
        clearInterval(id);
    }, []);

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
    return (
        <ItemBoard
            start={start}
            items={items}
            clickedIndex={clickedIndex}
            onClick={onItemClick}
            onReceiveCoin={onReceiveCoin}
        />
    );
};

export default ItemBoardScreen;
