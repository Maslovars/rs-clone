import React, { useEffect, useState } from 'react';
import { COIN_RECEIVE_SHOW_DURATION, ItemType } from '../../constants/items';
import Item from './Item/item';
import './itemBoard.scss';

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
            debugger;
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
        debugger;
        clearInterval(id);
    }, []);

    return (
        <div className="com-ItemBoard">
            {items.map((item, i) => (
                // eslint-disable-next-line max-len
                <Item key={i.toString()} item={item} highlight={highlight} clickedIndex={clickedIndex} onClick={onClick} i={i} />
            ))}
        </div>
    );
}

export default ItemBoard;
