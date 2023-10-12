import React from 'react'
import { checkIcon } from '../assets/check-circle-icon.svg'
import { exclamationIcon } from '../assets/check-circle-icon.svg'
import { infoIcon } from '../assets/check-circle-icon.svg'
import { xIcon } from '../assets/check-circle-icon.svg'


export default function Badge({ color="gray", shape="square", children }){
    //color will change both bg and text, shape will determine whether square or pill
    return (
        <div className={`badge badge--${color} badge--${shape}`}>
            {children}
        </div>
    )
}
