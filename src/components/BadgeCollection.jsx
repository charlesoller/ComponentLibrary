import React from 'react'
import Badge from './Badge'

export default function BadgeCollection(){
    return (
        <div className="badge-grid">
            <h1 className="badge-grid__title">Badge Component</h1>
            <Badge shape="square" color="gray">
                Badge
            </Badge>
            <Badge shape="pill" color="gray">
                Badge
            </Badge>

            <Badge shape="square" color="red">
                Badge
            </Badge>
            <Badge shape="pill" color="red">
                Badge
            </Badge>

            <Badge shape="square" color="yellow">
                Badge
            </Badge>
            <Badge shape="pill" color="yellow">
                Badge
            </Badge>

            <Badge shape="square" color="green">
                Badge
            </Badge>
            <Badge shape="pill" color="green">
                Badge
            </Badge>

            <Badge shape="square" color="blue">
                Badge
            </Badge>
            <Badge shape="pill" color="blue">
                Badge
            </Badge>

            <Badge shape="square" color="indigo">
                Badge
            </Badge>
            <Badge shape="pill" color="indigo">
                Badge
            </Badge>

            <Badge shape="square" color="purple">
                Badge
            </Badge>
            <Badge shape="pill" color="purple">
                Badge
            </Badge>

            <Badge shape="square" color="pink">
                Badge
            </Badge>
            <Badge shape="pill" color="pink">
                Badge
            </Badge>
        </div>
    )
}
