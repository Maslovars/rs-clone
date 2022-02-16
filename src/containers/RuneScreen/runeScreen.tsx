import React from 'react';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../app/redux-store';
import { RunesListType } from '../../constants/runes';
import Rune from '../../components/Rune/rune';

type RuneScreenPropsType = {
    onRuneBuy: (rune: RunesListType) => void;
};

const RuneScreen = (props: RuneScreenPropsType) => {
    const runes = useSelector<AppStateType, RunesListType[]>(
        (state) => state.rune.runes,
    );
    const coin = useSelector<AppStateType, number>((state) => state.coin.coins);

    const { onRuneBuy } = props;
    return <>
        {
        runes.map((rune) => {
            const canBuy = coin >= rune.price;
            return (
                <Rune
                    key={rune.name}
                    rune={rune}
                    canBuy={canBuy}
                    onClick={() => {
                        if (canBuy) {
                            onRuneBuy(rune);
                        }
                    }}
                />
            );
        })
    }
    </>
};

export default RuneScreen;
