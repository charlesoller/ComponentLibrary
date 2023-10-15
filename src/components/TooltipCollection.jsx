import React from 'react'
import Tooltip from './Tooltip'

export default function TooltipCollection(){
    return (
        <div className="tooltip-grid">
            <h1 className="tooltip-grid__title section__header">Tooltip Component</h1>
            <Tooltip title="Archive notes" style='dark'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip>
            <Tooltip title="Archive notes">
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip>
            <Tooltip title="Archive notes" style='blue'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip>
            <Tooltip title="Archive notes" style='lightblue'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip>
            <Tooltip title="Archive notes" style='pink'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip>
            <Tooltip title="Archive notes" style='lightpink'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip>
            <Tooltip title="Archive notes" style='green'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip>
            <Tooltip title="Archive notes" style='lightgreen'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
            </Tooltip>
        </div>
    )
}
