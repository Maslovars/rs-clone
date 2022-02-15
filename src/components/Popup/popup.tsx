import React from 'react';

type PopupPropsType = {
    type: string,
    content: Node, // посмотреть тип
    onClose: () => void,
};

const Popup = (props: PopupPropsType) => {
    const { type, content, onClose } = props
    return (
        <div className={"com-Popup"}>
            <div className={`popup-header ${type ? type : ''}`}/>
            <div className='popup-close' onClick={onClose}/>
            <div className="popup-table">
                <div className="popup-table-inner">
                    {content}
                </div>
            </div>
        </div>
    )

};

export default Popup;
