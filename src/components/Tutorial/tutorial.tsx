import React from 'react';

type TutorialPropsType = {
    step: number;
    onNext: () => void;
};

const tutorialContent = (step: number) => {
    switch (step) {
        case 0:
            return (
                <>
                    <p>Welcome!</p>
                    <br />
                    <p>Good to see you here!</p>
                    <br />
                    <p>I will teach you the basics of the game now.</p>
                </>
            );

        case 1:
            return (
                <>
                    <h1>←</h1>

                    <p>Here, you see your Coins, Stage and Damage.</p>
                    <br />
                    <p>You need to kill the Monster to go to the next Stage.</p>
                </>
            );

        case 2:
            return (
                <>
                    <h1>←</h1>

                    <p>This is the Weapon Board.</p>
                    <br />
                    <p>
                        Every weapon generates coin and deals damage to monsters
                        automatically.
                    </p>
                    <br />
                    <p>I gave you two Wooden Swords.</p>
                </>
            );

        case 3:
            return (
                <>
                    <h1>←</h1>
                    <p>The numbers on swords have meanings.</p>
                    <br />
                    <p>
                        <span className="red-number">Red number:</span>
                        how much damage it provides
                    </p>
                    <br />
                    <p>
                        <span className="yellow-number">Yellow number:</span>
                        {' '}
                        how much coin it generates
                    </p>
                </>
            );

        case 4:
            return (
                <>
                    <h1>←</h1>
                    <p>
                        You can click on Weapons and combine them to get more
                        powerful versions.
                    </p>
                    <br />
                    <p>
                        Try to click on both Weapons to make a more powerful
                        version.
                    </p>
                    <br />
                    <p>I am waiting...</p>
                </>
            );

        case 5:
            return (
                <>
                    <h1>←</h1>
                    <p>
                        Great, you made a Steel Sword! It is more powerful so
                        Weapon`s Coin income and Damage is increased to 2.
                    </p>
                    <br />
                    <p>You can combine only same tier of Weapons.</p>
                </>
            );

        case 6:
            return (
                <>
                    <h1>←</h1>
                    <p>
                        Every few seconds you will get new weapons
                        automatically.
                    </p>
                    <br />
                    <p>
                        Combine them and get stronger. Spend your coins on Runes
                        to get even stronger!
                    </p>
                </>
            );

        case 7:
            return (
                <>
                    <h1>←</h1>
                    <p>Now you are ready to challenge the monsters!</p>
                    <br />
                    <p>Click the Start button to attack first monster.</p>
                    <br />
                    <p>Have fun!</p>
                </>
            );

        default:
            return <p>Not implemented</p>;
    }
};

function Tutorial(props: TutorialPropsType) {
    const { step, onNext } = props;

    return (
        <div className={`com-Tutorial  step-${step}`}>
            <div className="tutorial-content">{tutorialContent(step)}</div>
            <button type="button" className="next" onClick={onNext}>
                Next
            </button>
        </div>
    );
}

export default Tutorial;
