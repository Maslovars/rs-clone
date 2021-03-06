import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import Item from './Item/item';
import { coinReceived } from '../../reducers/coin';
import { COIN_RECEIVE_SHOW_DURATION, ItemType } from '../../constants/items';
import useInterval from '../../helpers/useInterval';
import './itemBoard.scss';

type ItemBoardPropsType = {
    start: boolean;
    items: (ItemType | null)[];
    clickedIndex: number | null;
    onClick: (item: ItemType | null, index: number) => void;
};

function ItemBoard(props: ItemBoardPropsType) {
    const { items, clickedIndex, onClick, start } = props;
    const [highlight, setHighlight] = useState<boolean>(false);
    const [started, setStarted] = useState<boolean>(false);
    const dispatch = useDispatch();

    useInterval(
        useCallback(() => {
            if (!start) {
                return;
            }
            setHighlight(true);
            const coins = items.reduce((acc, item) => {
                if (item) {
                    acc += item.coins;
                }
                return acc;
            }, 0);
            dispatch(coinReceived(coins));
            setTimeout(() => {
                setHighlight(false);
            }, COIN_RECEIVE_SHOW_DURATION);
        }, [start, items]),
        2500,
        started,
        start,
        setStarted
    );

    return (
        <div className="com-ItemBoard">
            {items.map((item, i) => (
                <Item key={i.toString()} item={item} highlight={highlight} clickedIndex={clickedIndex} onClick={onClick} i={i} />
            ))}
        </div>
    );
}

export default ItemBoard;
