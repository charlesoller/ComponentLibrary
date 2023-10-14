import React from 'react'
import Tooltip from './Tooltip'

export default function TooltipCollection(){
    return (
        <div className="tooltip-grid">
            <h1 className="tooltip-grid__title">Tooltip Component</h1>
            <Tooltip title="Archive notes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip>
        </div>
    )
}
