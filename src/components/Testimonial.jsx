import React from 'react'
import Divider from '../assets/testimonial-divider.svg'

export default function Testimonial({ logo, name, title, darkMode='light', children }){
    return (
        <div className={`testimonial ${darkMode}`}>
            <p className={`testimonial__quote`}>{children}</p>
            <span className={`testimonial__info`}>
                <p className={`testimonial__name`}>{name}</p>
                <p className={`testimonial__title`}>{title}</p>
                <img className={`testimonial__divider`} src={Divider} />
            </span>
            <img className={`testimonial__logo`} src={logo} />
        </div>
    )
}
