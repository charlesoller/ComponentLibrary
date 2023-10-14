import React from 'react'
import InboxIcon from '../assets/inbox-icon.svg'
import xIcon from '../assets/x-icon.svg'
import { FaInbox, FaTimes } from "react-icons/fa"

export default function Tooltip({ title, children, style='light' }){
    return (
        <div className={`tooltip tooltip--${style}`}>
            <h2 className={`tooltip__title tooltip--${style}`}>{title}</h2>
            <p className={`tooltip__text tooltip--${style}`}>{children}</p>
            {/* <i className={`tooltip__icon tooltip--${style}`} size={'1.5rem'}>{icon size={'1.2rem'}}</i> */}
            <FaInbox className={`tooltip__icon tooltip--${style}`} size={'1.1rem'} />
            <FaTimes className={`tooltip__x tooltip--${style}`} size={'1.1rem'} />
        </div>
    )
}
