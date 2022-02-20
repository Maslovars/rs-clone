import React, { useEffect, useState } from 'react';
import { GAME_SPEED_MULTIPLIER, objMonsterType } from '../../constants';
import Monster from '../../components/Monster/monster';
import useDpsSelectors from '../../selectors/dpsSelector';
import useMonsterSelectors from '../../selectors/monsterSelector';
import useSheetsSelectors from '../../selectors/sheetSelector';
import getRandomIntInclusive from '../../helpers/random';

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

    const [started, setStarted] = useState<boolean>(false);
    const [isCriticalHit, setIsCriticalHit] = useState<boolean>(false);
    const [receivedDamage, setReceivedDamage] = useState<number>(0);
    // eslint-disable-next-line no-undef
    const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

    useEffect(() => {
        if (started) {
            return;
        }
        if (!start) {
            return;
        }
        setStarted(true);
        const id = setInterval(() => {
            const clone = {
                ...monster,
            };

            const critRoll = getRandomIntInclusive(0, 100);

            if (critRoll <= critRate) {
                setIsCriticalHit(true);
                // eslint-disable-next-line no-debugger
                debugger;
                setReceivedDamage(
                    Math.round((dps / GAME_SPEED_MULTIPLIER) * critDamage),
                );
            } else {
                setIsCriticalHit(false);
                // eslint-disable-next-line no-debugger
                debugger;
                setReceivedDamage(
                    Math.round(Math.round(dps / GAME_SPEED_MULTIPLIER)),
                );
            }
            // eslint-disable-next-line no-debugger
            debugger;
            clone.currentHealth -= receivedDamage;

            if (clone.currentHealth <= 0) {
                onMonsterDie(level + 1, clone);
                return;
            }
            onMonsterHit(clone);
        }, 1000);
        setIntervalId(id);
    }, [started, start, monster, critRate, critDamage, dps]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (intervalId) {
            return () => clearInterval(intervalId);
        }
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
