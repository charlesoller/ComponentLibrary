import React, {useState} from 'react'
import Card from './Card'
import { FaApple, FaBtc, FaReact } from "react-icons/fa";
import { motion } from "framer-motion"

export default function CardCollection(){
    const scale = 1.05;
    const animateCards = {
        before: { scale: 0.5 },
        after: {
            scale: 1,
            // opacity: 1,
            transition: {
                duration: 1,
                ease: "backOut"
            }
        }
    }

    return (
        <div className='card-grid'>
            <h1 className="card-collection__title section__header">Card Component</h1>
            <motion.div variants={animateCards} initial="before" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.15}}>
                <Card title="Easy Deployment">
                    <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </Card>
            </motion.div>
            <motion.div variants={animateCards} initial="before" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.15}}>
                <Card title="So Modular!" icon={<FaApple size={'1.5rem'} color='lightgray'/>} color='darkgray' width='80%' darkMode='dark'>
                    <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                </Card>
            </motion.div>
            <motion.div variants={animateCards} initial="before" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.15}}>
                <Card color='#E66955' icon={<FaBtc color='white'/>} width='55%'>
                    <p>Doesn't even need a title!</p>
                </Card>
            </motion.div>
            <motion.div variants={animateCards} initial="before" whileInView="after" viewport={{ once: true }} whileHover={{scale: scale}} transition={{duration: 0.15}}>
                <Card title="Or children!" icon={<FaReact size={'1.5rem'} color='lightgray'/>} color='#1C2294' darkMode='dark'/>
            </motion.div>
        </div>
    )
}
