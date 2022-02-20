import React from 'react';
import { RunesListType } from '../../constants/runes';
import Rune from '../../components/Rune/rune';
import useRuneSelectors from '../../selectors/runeSelector';
import useCoinsSelectors from '../../selectors/coinsSelector';

type RuneScreenPropsType = {
    onRuneBuy: (rune: RunesListType) => void;
};

function RuneScreen(props: RuneScreenPropsType) {
    const { runes } = useRuneSelectors();
    const { coins } = useCoinsSelectors();

    const { onRuneBuy } = props;
    return (
        <>
            {runes.map((rune) => {
                const canBuy = coins >= rune.price;
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
            })}
        </>
    );
}

export default RuneScreen;
