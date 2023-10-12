import React from 'react'
import Card from './Card'

export default function CardCollection(){
    //this should also accept an icon prop below
    return (
        <div className='card-grid'>
            <Card title="Easy Deployment">
                <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </Card>
        </div>
    )
}
