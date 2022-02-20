import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { COIN_RECEIVE_SHOW_DURATION, ItemType } from '../../constants/items';
import Item from './Item/item';
import './itemBoard.scss';
import { coinReceived } from '../../reducers/coin';

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
    // eslint-disable-next-line no-undef
    const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (started) {
            return;
        }
        if (!start) {
            return;
        }
        setStarted(true);
        const id = setInterval(() => {
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
        }, 2500);
        setIntervalId(id);
    }, [started, start, items]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (intervalId) {
            return () => clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="com-ItemBoard">
            {items.map((item, i) => (
                <Item
                    i={i}
                    item={item}
                    highlight={highlight}
                    clickedIndex={clickedIndex}
                    onClick={onClick}
                />
            ))}
        </div>
    );
}

export default ItemBoard;
