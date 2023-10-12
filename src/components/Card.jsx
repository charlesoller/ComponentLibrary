import React from 'react'
import cloudIcon from '../assets/cloud-icon.svg';

export default function Card({ icon, title, children, color }){
    return (
        <div className={`card card--${color}`}>
            <div className="card__content">
                <h1 className="card__title">{title}</h1>
                <p className="card__body">{children}</p>
            </div>
            <div className="card__icon__bg">
                <img className="card__icon" src={cloudIcon} />
            </div>
        </div>
    )
}
