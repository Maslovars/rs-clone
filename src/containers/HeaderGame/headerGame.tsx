import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../app/redux-store';
import Counter from '../../components/Counter/counter';

type HeaderPropsType = {
    level: number;
};

const HeaderGame = React.memo((props: HeaderPropsType) => {
    const coins = useSelector<AppStateType, number>(
        (state) => state.coin.coins,
    );
    const dps = useSelector<AppStateType, number>((state) => state.item.dps);
    const { level } = props;

    return <Counter level={level} dps={dps} coins={coins} />;
});

export default HeaderGame;
