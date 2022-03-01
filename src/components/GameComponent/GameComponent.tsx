import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Monster from '../Monster/monster';
import Counter from '../Counter/counter';
import Footer from '../Footer/footer';
import Game from '../../containers/Game/game';
import './gameComponent.scss';

function GameComponent() {
    const [load, setLoad] = useState<boolean>(false);

    function preload() {
        return new Promise<void>((accept) => {
            setTimeout(() => {
                return accept();
            }, 3000);
        });
    }

    useEffect(() => {
        const preloads = async () => {
            await preload();
            setLoad(true);
        };
        preloads();
    }, [load]);

    function preloadAll() {
        return (
            <div className="preload">
                <Monster name="Fallen_Angels_1" />
                <Monster name="Fallen_Angels_2" />
                <Monster name="Fallen_Angels_3" />
                <Monster name="Golem_1" />
                <Monster name="Golem_2" />
                <Monster name="Golem_3" />
                <Monster name="Minotaur_1" />
                <Monster name="Minotaur_2" />
                <Monster name="Minotaur_3" />
                <Monster name="Reaper_Man_1" />
                <Monster name="Reaper_Man_2" />
                <Monster name="Reaper_Man_3" />
                <Monster name="Satyr_1" />
                <Monster name="Satyr_2" />
                <Monster name="Satyr_3" />
                <Monster name="Troll_1" />
                <Monster name="Troll_2" />
                <Monster name="Troll_3" />
                <Monster name="Wraith_1" />
                <Monster name="Wraith_2" />
                <Monster name="Wraith_3" />
            </div>
        );
    }

    function preloadInitial() {
        return (
            <div className="preload">
                <Monster name="Troll_3" />
                <Counter />
                <Footer />
            </div>
        );
    }
    if (!load) {
        return (
            <div className="app-container">
                <h1 className="loading">
                    <FormattedMessage id="game_loading" />
                </h1>
                {preloadInitial()}
            </div>
        );
    }

    return (
        <div className="app-container">
            <Game />
            {preloadAll()}
        </div>
    );
}

export default GameComponent;
