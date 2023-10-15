import React from 'react'
import Card from './Card'
import { FaApple, FaBtc, FaReact } from "react-icons/fa";

export default function CardCollection(){
    //this should also accept an icon prop below
    return (
        <div className='card-grid'>
            <h1 className="card-collection__title section__header">Card Component</h1>
            <Card title="Easy Deployment">
                <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </Card>

            <Card title="So Modular!" icon={<FaApple size={'1.5rem'} color='lightgray'/>} color='darkgray' width='80%' darkMode='dark'>
                <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </Card>

            <Card color='#E66955' icon={<FaBtc color='white'/>} width='55%'>
                <p>Doesn't even need a title!</p>
            </Card>

            <Card title="Or children!" icon={<FaReact size={'1.5rem'} color='lightgray'/>} color='#1C2294' darkMode='dark'/>
        </div>
    )
}
