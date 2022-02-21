import React from 'react';
import './counter.scss';

type CounterPropsType = {
    coins?: number;
    dps?: number;
    level?: number;
};

const defaultProps = {
    coins: 0,
    dps: 0,
    level: 0
};

function Counter(props: CounterPropsType) {
    const { coins, dps, level } = props;

    return (
        <div className="com-Counter">
            <div className="coins-box">
                <h2>{coins}</h2>
            </div>
            <div className="moves-box">
                <h1>Stage</h1>
                <h2>{level}</h2>
            </div>
            <div className="dps-box">
                <h2>{dps}</h2>
            </div>
        </div>
    );
}

Counter.defaultProps = defaultProps;

export default Counter;
