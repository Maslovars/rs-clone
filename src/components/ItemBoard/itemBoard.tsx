import React, { useEffect, useState } from 'react';
import { ItemType } from '../../constants/items';
import Item from './Item/item';
import './itemBoard.scss';

export const COIN_RECEIVE_SHOW_DURATION = 500;

type ItemBoardPropsType = {
    start: boolean;
    items: (ItemType | null)[];
    clickedIndex: number | null;
    onClick: (item: ItemType | null, index: number) => void;
    onReceiveCoin: (coins: number) => void;
};

function ItemBoard(props: ItemBoardPropsType) {
    const { items, clickedIndex, onClick, start, onReceiveCoin } = props;
    const [highlight, setHighlight] = useState<boolean>(false);
    const [started] = useState<boolean>(true);

    function listen() {
        return setInterval(() => {
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

            onReceiveCoin(coins);

            setTimeout(() => {
                setHighlight(false);
            }, COIN_RECEIVE_SHOW_DURATION);
        }, 2500);
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

    return (
        <div className="com-ItemBoard">
            {items.map((item, i) => (
                <Item
                    key={i}
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
