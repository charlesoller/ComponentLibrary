import React from 'react'
import Banner from './Banner'

export default function BannerCollection(){
    return (
        <div className='banner-grid'>
            <h1 className="banner-grid__title">Banner Component</h1>
            <Banner status="neutral" message="Update available">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </Banner>
            <Banner status="neutral" message="Update available" />

            <Banner status="success" message="Congratulations!">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
            </Banner>
            <Banner status="success" message="Congratulations!" />

            <Banner status="warning" message="Attention">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </Banner>
            <Banner status="warning" message="Attention" />

            <Banner status="error" message="There is a problem with your application">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
            </Banner>
            <Banner status="error" message="There is a problem with your application" />
        </div>
    )
}
