import React from 'react'
import cloudIcon from '../assets/cloud-icon.svg';

export default function Card({ icon, title, children, color }){

    // console.log(children)
    return (
        <div className={`card card--${color}`}>
            <div className="card__content">
                <h1 className="card__title">{title}</h1>
                <div className="card__body">{children}</div>
            </div>
            <div className="card__icon__bg">
                <img className="card__icon" src={cloudIcon} />
            </div>
        </div>
    )
}
