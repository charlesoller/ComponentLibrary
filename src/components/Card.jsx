import React from 'react'
import cloudIcon from '../assets/cloud-icon.svg';

export default function Card({ icon, title, children, width='100%', darkMode='light', color='default' }){

    function isHex(str){
        return str[0] === '#';
    }

    return (
        <div className={`card card--${color}`} style={{width: width}}>
            <div className={`card__content card__content--${darkMode}`}>
                {title && <h2 className="card__title">{title}</h2>}
                {children && <div className="card__body">{children}</div>}
            </div>
            <div className={`card__icon__bg card__icon__bg--${color}`} style={{background: isHex(color) && color }}>
                {icon ? <i className='card__icon'>{icon}</i>
                : <img className="card__icon--default" src={cloudIcon} />}
            </div>
        </div>
    )
}
