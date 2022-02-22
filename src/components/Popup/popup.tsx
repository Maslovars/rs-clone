import React from 'react';
import './popup.scss';

type PopupPropsType = {
    type: string;
    content: JSX.Element | null;
    onClose: () => void;
};

function Popup(props: PopupPropsType) {
    const { type, content, onClose } = props;
    return (
        <div className="com-Popup">
            <div className={`popup-header ${type && type}`} />
            <div className="popup-close" onClick={onClose} role="button" tabIndex={0} aria-label="button" />
            <div className="popup-table">
                <div className="popup-table-inner">{content}</div>
            </div>
        </div>
    );
}

export default Popup;
