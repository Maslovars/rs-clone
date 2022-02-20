import React from 'react';
import { RunesListType } from '../../constants/runes';
import './rune.scss';

type RunePropsType = {
    rune: RunesListType;
    canBuy: boolean;
    onClick: () => void;
};

function Rune(props: RunePropsType) {
    const { rune, canBuy, onClick } = props;
    let per = '';
    let current = '';

    if (rune.informer === 'percent') {
        per = `${(100 * rune.multiplier - 100).toFixed(2)}%`;
        current = `${(
            100 * (rune.multiplier * rune.owned)
            - rune.owned * 100
            + rune.base
        ).toFixed(2)}%`;
    }

    if (rune.informer === 'plus') {
        per = `+${rune.multiplier}`;
        current = `+${(rune.multiplier * rune.owned).toFixed()}`;
    }
    return (
        <div className={`com-Rune ${canBuy || ''}`}>
            <img src={rune.icon} alt="rune-icon" />
            <div className="rune-upgrade-box">
                <h1>{rune.name}</h1>
                <h3>{rune.description}</h3>
                <h3>
                    Per level:
                    {per}
                </h3>
                <h3>
                    Current:
                    {current}
                </h3>
                <h3>
                    Price:
                    {rune.price}
                </h3>
                <p>
                    Owned:
                    {rune.owned}
                </p>
                <div
                    className="buy-button"
                    onClick={onClick}
                    role="button"
                    aria-label="button"
                    tabIndex={0}
                >
                    <h2>Buy</h2>
                </div>
            </div>
        </div>
    );
}

export default Rune;
