import React from 'react'
import Testimonial from './Testimonial'
import Logo from '../assets/testimonial-logo.svg'
import { motion } from "framer-motion"

export default function TestimonialCollection(){
    const scale = 1.05;
    const animate = {
        before: { opacity: 0 },
        after: {
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeOut"
            }
        }
    }
    return (
        <div className="testimonial-grid">
            <h1 className="testimonial-grid__title section__header">Testimonial Component</h1>
            <motion.div variants={animate} initial="before" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.3}}>
                <Testimonial logo={Logo} name='May Andersons' title='Workcation, CTO'>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </Testimonial>
            </motion.div>
            <motion.div variants={animate} initial="before" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.3}}>
                <Testimonial logo={Logo} name='May Andersons' title='Workcation, CTO' darkMode='dark'>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </Testimonial>
            </motion.div>
        </div>
    )
}
