import React from 'react'
import ImageTestimonial from './ImageTestimonial'
import profilePic from '../assets/profile-pic.jpeg'
import { motion } from "framer-motion"

export default function ImageTestimonialCollection(){
    const scale = 1.05;
    const animateCards = {
        beforeLeft: { x: "-50vw"},
        beforeRight: { x: "50vw"},
        after: {
            x: 0,
            transition: {
                duration: 1,
                ease: "backOut"
            }
        }
    }

    return (
        <div className="image-testimonial-grid">
            <h1 className="image-testimonial-title section__header">Image Testimonial Component</h1>
            <motion.div variants={animateCards} initial="beforeRight" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.3}}>
                <ImageTestimonial image={profilePic} name='May Andersons' title='Workcation, CTO' imgPosition='right' color='#6F8AE3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </ImageTestimonial>
            </motion.div>
            <motion.div variants={animateCards} initial="beforeLeft" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.3}}>
                <ImageTestimonial image={profilePic} name='May Andersons' title='Workcation, CTO' imgPosition='left' color='blue' text='dark'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </ImageTestimonial>
            </motion.div>
            <motion.div variants={animateCards} initial="beforeRight" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.3}}>
                <ImageTestimonial image={profilePic} name='May Andersons' title='Workcation, CTO' imgPosition='right' color='darkyellow'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </ImageTestimonial>
            </motion.div>
            <motion.div variants={animateCards} initial="beforeLeft" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.3}}>
                <ImageTestimonial image={profilePic} name='May Andersons' title='Workcation, CTO'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </ImageTestimonial>
            </motion.div>
        </div>
    )
}
