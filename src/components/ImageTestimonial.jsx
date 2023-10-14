import React from 'react'
import quotesIconLight from '../assets/quotes-icon.svg'
import quotesIconDark from '../assets/quotes-icon-dark.svg'

export default function ImageTestimonial({ children, image, name, title, imgPosition='left', color='default', text='light' }){
    //I would like to add dark/light, as well as ability to position right or left
    function isHex(str){
        return str[0] === '#';
    }

    return (
        <div className={`image-testimonial ${imgPosition} ${text}`}>
            <div className={`image-testimonial__container image-testimonial__container--${color}`} style={{background: isHex(color) && color }}>
                    <p className={`image-testimonial__testimonial ${imgPosition}`}>{children}</p>
                    <p className={`image-testimonial__testimonial__name ${imgPosition}`}>{name}</p>
                    <p className={`image-testimonial__testimonial__title ${imgPosition}`}>{title}</p>
                    <img className={`image-testimonial__testimonial__icon ${imgPosition} ${text}`} src={text === 'light' ? quotesIconLight : quotesIconDark} />
            </div>
            <img className={`image-testimonial__image`} src={image} />
        </div>
    )
}
