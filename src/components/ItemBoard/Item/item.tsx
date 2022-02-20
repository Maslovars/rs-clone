import React from 'react';
import { ItemType } from '../../../constants/items';
import '../itemBoard.scss';

type ItemPropsType = {
    item: ItemType | null;
    onClick: (item: ItemType | null, i: number) => void;
    i: number;
    clickedIndex: number | null;
    highlight: boolean;
};

function Item(props: ItemPropsType) {
    const { item, onClick, i, clickedIndex, highlight } = props;
    if (!item) {
        return (
            <div
                aria-label="button"
                tabIndex={0}
                role="button"
                onClick={() => onClick && onClick(null, i)}
                className="item"
            />
        );
    }

    return (
        <div
            aria-label="button"
            tabIndex={0}
            role="button"
            onClick={() => onClick && onClick(item, i)}
            className={`item ${clickedIndex === i ? 'clicked' : ''} ${
                highlight ? 'highlight' : ''
            }`}
        >
            <div className="item-stats">
                <div className="item-damage">{item.damage}</div>
                <div className="item-coin">{item.coins}</div>
            </div>
            <img src={item.icon} alt="weapons" />
        </div>
    );
}

export default Item;
