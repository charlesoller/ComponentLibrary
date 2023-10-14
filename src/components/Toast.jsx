import React from 'react'
import { createPortal } from 'react-dom'
import checkIcon from '../assets/toast-check-circle.svg';
import exclamationIcon from '../assets/toast-exclamation-circle.svg';
import infoIcon from '../assets/toast-information-circle.svg';
import xIcon from '../assets/toast-x-circle.svg';

export default function Badge({ title='Please provide a primary message.', status='neutral', children }){
    function determineIcon(){
        return (
            status === 'success' ? checkIcon
            : status === 'warning' ? exclamationIcon
            : status === 'error' ? xIcon
            : infoIcon
        );
    }

    return (
        createPortal (
            <div className={`toast toast--${status}`}>
                <h2 className={`toast__title toast--${status}`}>{title}</h2>
                <p className={`toast__text toast--${status}`}>{children}</p>
                <img className={`toast__icon`} src={determineIcon()}/>
            </div>, document.body
        )
    );
}

{/* <div className={`toast toast--${status}`}>
<h2 className={`toast__title toast--${status}`}>{title}</h2>
<p className={`toast__text toast--${status}`}>{children}</p>
<img className={`toast__icon`} src={determineIcon()}/>
</div> */}
