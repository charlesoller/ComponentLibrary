import React from 'react'
import checkIcon from '../assets/check-circle-icon.svg';
import exclamationIcon from '../assets/exclamation-icon.svg';
import infoIcon from '../assets/info-icon.svg';
import xIcon from '../assets/x-circle-icon.svg';


export default function Banner({ status="neutral", message="Please provide a primary message.", children }){
    function determineIcon(){
        return (
            status === 'success' ? checkIcon
            : status === 'warning' ? exclamationIcon
            : status === 'error' ? xIcon
            : infoIcon
        );
    }

    return (
        <div className={`banner banner--${status}`}>
            <img className="banner__icon" src={determineIcon()}/>
            <h1 className={`banner__message banner__message--${status} ${!children && status === 'error' ? 'banner__message--bold' : null}`}>{message}</h1>
            {children && <p className="banner__content">{children}</p>}
        </div>
    )
}
