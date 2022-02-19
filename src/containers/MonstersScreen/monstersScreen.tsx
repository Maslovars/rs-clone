import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../app/redux-store';
import { getRandomIntInclusive } from '../../helpers/random';
import { GAME_SPEED_MULTIPLIER, objMonsterType } from '../../constants';
import Monster from '../../components/Monster/monster';

type MonstersScreenPropsType = {
    onMonsterHit: (monster: { [key: number]: objMonsterType }) => void;
    onMonsterDie: (
        level: number,
        monster: { [key: number]: objMonsterType },
    ) => void;
    start: boolean;
    level: number;
};

function MonstersScreen(props: MonstersScreenPropsType) {
    const dps = useSelector<AppStateType, number>((state) => state.item.dps);
    const monster = useSelector<
        AppStateType,
        { [key: number]: objMonsterType }
    >((state) => state.monster.monster);
    const critRate = useSelector<AppStateType, number>(
        (state) => state.sheet.critRate,
    );
    const critDamage = useSelector<AppStateType, number>(
        (state) => state.sheet.critDamage,
    );

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

            clone[level].currentHealth -= receivedDamage;

            if (clone[level].currentHealth <= 0) {
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
            {...monster[level]}
        />
    );
}

export default MonstersScreen;
