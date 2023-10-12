import React from 'react'

export default function Badge({ color="gray", shape="square", children }){
    return (
        <div className={`badge badge--${color} badge--${shape}`}>
            {children}
        </div>
    )
}
