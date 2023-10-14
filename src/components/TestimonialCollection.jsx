import React from 'react'
import Testimonial from './Testimonial'
import Logo from '../assets/testimonial-logo.svg'

export default function TestimonialCollection(){
    return (
        <div className="testimonial-grid">
            <h1 className="testimonial-grid__title">Testimonial Component</h1>
            <Testimonial logo={Logo} name='May Andersons' title='Workcation, CTO'>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </Testimonial>
            <Testimonial logo={Logo} name='May Andersons' title='Workcation, CTO' darkMode='dark'>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </Testimonial>
        </div>
    )
}
