import React from 'react';

type CounterPropsType = {
    coins: number;
    dps: number;
    level: number;
};

const Counter = React.memo((props: CounterPropsType) => {
    const { coins = 0, dps = 0, level = 0 } = props;

    return (
        <div className='com-Counter'>
            <div className='coins-box'>
                <h2>{coins}</h2>
            </div>
            <div className='moves-box'>
                <h1>Stage</h1>
                <h2>{level}</h2>
            </div>
            <div className='dps-box'>
                <h2>{dps}</h2>
            </div>
        </div>
    );
});

export default Counter;
