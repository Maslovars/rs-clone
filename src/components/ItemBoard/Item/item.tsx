import React from 'react';
import { ItemType } from '../../../constants/items';
import '../itemBoard.scss';

const classNames = require('classnames');

type ItemPropsType = {
    item: ItemType | null;
    onClick: (item: ItemType | null, i: number) => void;
    i: number;
    clickedIndex: number | null;
    highlight: boolean;
};

function Item(props: ItemPropsType) {
    // eslint-disable-next-line object-curly-newline
    const { item, onClick, i, clickedIndex, highlight } = props;
    if (!item) {
        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div onClick={() => onClick && onClick(null, i)} className="item" />
        );
    }

    return (
        <div
            onClick={() => onClick && onClick(item, i)}
            className={classNames('item', {
                clicked: clickedIndex === i,
                highlight,
            })}
            role="presentation"
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
