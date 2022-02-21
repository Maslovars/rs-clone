import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GAME_SPEED_MULTIPLIER, objMonsterType } from '../../constants';
import Monster from '../../components/Monster/monster';
import useDpsSelectors from '../../selectors/dpsSelector';
import useMonsterSelectors from '../../selectors/monsterSelector';
import useSheetsSelectors from '../../selectors/sheetSelector';
import getRandomIntInclusive from '../../helpers/random';
import { monsterUpdate } from '../../reducers/monster';
import useInterval from '../../helpers/useInterval';

type MonstersScreenPropsType = {
    onMonsterDie: (level: number, monster: objMonsterType) => void;
    start: boolean;
    level: number;
};

function MonstersScreen(props: MonstersScreenPropsType) {
    const dispatch = useDispatch();
    const { dps } = useDpsSelectors();
    const { monster } = useMonsterSelectors();
    const { critRate } = useSheetsSelectors();
    const { critDamage } = useSheetsSelectors();

    const { start, onMonsterDie, level } = props;

    const [started, setStarted] = useState<boolean>(false);
    const receivedDamage = useRef(0);
    const [isCriticalHit, setIsCriticalHit] = useState<boolean>(false);
    const [delay] = useState<number>(1000);

    useInterval(
        () => {
            const critRoll = getRandomIntInclusive(0, 100);
            if (critRoll <= critRate) {
                setIsCriticalHit(true);
                receivedDamage.current = Math.round((dps / GAME_SPEED_MULTIPLIER) * critDamage);
            } else {
                setIsCriticalHit(false);
                receivedDamage.current = Math.round(dps / GAME_SPEED_MULTIPLIER);
            }
            monster.currentHealth -= receivedDamage.current;
            if (monster.currentHealth <= 0) {
                onMonsterDie(level + 1, monster);
                setStarted(false);
                return;
            }
            dispatch(monsterUpdate(monster));
        },
        delay,
        started,
        start,
        setStarted
    );
    return <Monster isCriticalHit={isCriticalHit} receivedDamage={receivedDamage.current} {...monster} />;
}

export default MonstersScreen;
