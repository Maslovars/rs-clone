import React from 'react';
import Counter from '../../components/Counter/counter';
import useCoinsSelectors from '../../selectors/coinsSelector';
import useDpsSelectors from '../../selectors/dpsSelector';

type HeaderPropsType = {
    level: number;
};

const HeaderGame = React.memo((props: HeaderPropsType) => {
    const { coins } = useCoinsSelectors();
    const { dps } = useDpsSelectors();
    const { level } = props;
    return <Counter level={level} dps={dps} coins={coins} />;
});

export default HeaderGame;
