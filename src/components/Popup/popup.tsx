/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './popup.scss';

type PopupPropsType = {
    type: string;
    // eslint-disable-next-line no-undef
    content: JSX.Element | null;
    onClose: () => void;
};

function Popup(props: PopupPropsType) {
    const { type, content, onClose } = props;
    return (
        <div className="com-Popup">
            <div className={`popup-header ${type || ''}`} />
            <div
                className="popup-close"
                onClick={onClose}
                role="button"
                tabIndex={0}
            />
            <div className="popup-table">
                <div className="popup-table-inner">{content}</div>
            </div>
        </div>
    );
}

export default Popup;
