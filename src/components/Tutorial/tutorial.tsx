import React from 'react';
import { FormattedMessage } from 'react-intl';
import './tutorial.scss';

type TutorialPropsType = {
    step: number;
    onNext: () => void;
};

const tutorialContent = (step: number) => {
    switch (step) {
        case 0:
            return (
                <>
                    <p>
                        <FormattedMessage id="tutorial_welcome" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_text_1" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_text_2" />
                    </p>
                </>
            );

        case 1:
            return (
                <>
                    <h1>←</h1>

                    <p>
                        <FormattedMessage id="tutorial_step_1_text_1" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_step_1_text_2" />
                    </p>
                </>
            );

        case 2:
            return (
                <>
                    <h1>←</h1>

                    <p>
                        <FormattedMessage id="tutorial_step_2_text_1" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_step_2_text_2" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_step_2_text_3" />
                    </p>
                </>
            );

        case 3:
            return (
                <>
                    <h1>←</h1>
                    <p>
                        <FormattedMessage id="tutorial_step_3_text_1" />
                    </p>
                    <br />
                    <p>
                        <span className="red-number">
                            <FormattedMessage id="tutorial_step_3_text_2_red" />
                        </span>
                        <FormattedMessage id="tutorial_step_3_text_2" />
                    </p>
                    <br />
                    <p>
                        <span className="yellow-number">
                            <FormattedMessage id="tutorial_step_3_text_3_yellow" />
                        </span>
                        <FormattedMessage id="tutorial_step_3_text_3" />
                    </p>
                </>
            );

        case 4:
            return (
                <>
                    <h1>←</h1>
                    <p>
                        <FormattedMessage id="tutorial_step_4_text_1" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_step_4_text_2" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_step_4_text_3" />
                    </p>
                </>
            );

        case 5:
            return (
                <>
                    <h1>←</h1>
                    <p>
                        <FormattedMessage id="tutorial_step_5_text_1" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_step_5_text_2" />
                    </p>
                </>
            );

        case 6:
            return (
                <>
                    <h1>←</h1>
                    <p>
                        <FormattedMessage id="tutorial_step_6_text_1" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_step_6_text_2" />
                    </p>
                </>
            );

        case 7:
            return (
                <>
                    <h1>←</h1>
                    <p>
                        <FormattedMessage id="tutorial_step_7_text_1" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_step_7_text_2" />
                    </p>
                    <br />
                    <p>
                        <FormattedMessage id="tutorial_step_7_text_3" />
                    </p>
                </>
            );

        default:
            return (
                <p>
                    <FormattedMessage id="tutorial_not_implemented" />
                </p>
            );
    }
};

function Tutorial(props: TutorialPropsType) {
    const { step, onNext } = props;

    return (
        <div className={`com-Tutorial  step-${step}`}>
            <div className="tutorial-content">{tutorialContent(step)}</div>
            <button type="button" className="next" onClick={onNext}>
                <FormattedMessage id="tutorial_next" />
            </button>
        </div>
    );
}

export default Tutorial;
