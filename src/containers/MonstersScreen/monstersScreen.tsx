import React, { useEffect, useState } from 'react';
import { getRandomIntInclusive } from '../../helpers/random';
import { GAME_SPEED_MULTIPLIER, objMonsterType } from '../../constants';
import Monster from '../../components/Monster/monster';
import useDpsSelectors from '../../selectors/dpsSelector';
import useMonsterSelectors from '../../selectors/monsterSelector';
import useSheetsSelectors from '../../selectors/sheetSelector';

type MonstersScreenPropsType = {
    onMonsterHit: (monster: objMonsterType) => void;
    onMonsterDie: (level: number, monster: objMonsterType) => void;
    start: boolean;
    level: number;
};

function MonstersScreen(props: MonstersScreenPropsType) {
    const { dps } = useDpsSelectors();
    const { monster } = useMonsterSelectors();
    const { critRate } = useSheetsSelectors();
    const { critDamage } = useSheetsSelectors();

    const { start, onMonsterHit, onMonsterDie, level } = props;
    let receivedDamage: number | undefined;

    const [started, setStarted] = useState<boolean>(false);
    const [isCriticalHit, setIsCriticalHit] = useState<boolean>(false);

    function listen() {
        setStarted(true);
        setInterval(() => {
            const clone = {
                ...monster,
            };

            const critRoll = getRandomIntInclusive(0, 100);

            if (critRoll <= critRate) {
                setIsCriticalHit(true);
                receivedDamage = Math.round(
                    (dps / GAME_SPEED_MULTIPLIER) * critDamage,
                );
            } else {
                setIsCriticalHit(false);
                receivedDamage = Math.round(dps / GAME_SPEED_MULTIPLIER);
            }

            clone.currentHealth -= receivedDamage;

            if (clone.currentHealth <= 0) {
                onMonsterDie(level + 1, clone);
                return;
            }

            onMonsterHit(clone);
        }, 1000);
    }

    useEffect(() => {
        if (started) {
            return;
        }
        if (!start) {
            return;
        }
        listen();
    }, []);

    return (
        <Monster
            isCriticalHit={isCriticalHit}
            receivedDamage={receivedDamage}
            {...monster}
        />
    );
}

export default MonstersScreen;
