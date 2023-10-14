import React from 'react'
import InboxIcon from '../assets/inbox-icon.svg'
import xIcon from '../assets/x-icon.svg'

export default function Tooltip({ title, children, icon=InboxIcon}){
    return (
        <div className={`tooltip`}>
            <h2 className='tooltip__title'>{title}</h2>
            <p className='tooltip__text'>{children}</p>
            <img className='tooltip__icon' src={icon} />
            <img className='tooltip__x' src={xIcon} />
        </div>
    )
}
