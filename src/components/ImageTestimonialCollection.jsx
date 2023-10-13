import React from 'react'
import ImageTestimonial from './ImageTestimonial'
import profilePic from '../assets/profile-pic.jpeg'

export default function ImageTestimonialCollection(){
    return (
        <div className="image-testimonial-grid">
            <h1 className="image-testimonial-title">Image Testimonial</h1>
            <ImageTestimonial image={profilePic} name='May Andersons' title='Workcation, CTO' imgPosition='right' color='#6F8AE3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
            </ImageTestimonial>
            <ImageTestimonial image={profilePic} name='May Andersons' title='Workcation, CTO' imgPosition='left' color='#DA6FE3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
            </ImageTestimonial>
            <ImageTestimonial image={profilePic} name='May Andersons' title='Workcation, CTO' imgPosition='right' color='#FAF2D2' text='dark'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
            </ImageTestimonial>
        </div>
    )
}
