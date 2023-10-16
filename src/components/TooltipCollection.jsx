import React from 'react'
import Tooltip from './Tooltip'
import { motion } from "framer-motion"

export default function TooltipCollection(){
    const scale = 1.1;
    const container = {
        invisible: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }}
    }
    const item = {
        invisible: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeIn"
            }
        }
    }

    return (
        <div className='tooltip-component-layout'>
            <h1 className="tooltip-grid__title section__header">Tooltip Component</h1>
            <motion.ol
                className="tooltip-grid"
                variants={container}
                initial="invisible"
                whileInView="visible"
                viewport={{once: true}}
            >
            <motion.li variants={item} whileHover={{ scale: scale }} transition={{duration: 0.2, ease: "easeOut"}}>
                <Tooltip title="Archive notes" style='dark'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
            </motion.li>
            <motion.li variants={item} whileHover={{ scale: scale }} transition={{duration: 0.2, ease: "easeOut"}}>
                <Tooltip title="Archive notes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
            </motion.li>
            <motion.li variants={item} whileHover={{ scale: scale }} transition={{duration: 0.2, ease: "easeOut"}}>
                <Tooltip title="Archive notes" style='blue'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
            </motion.li>
            <motion.li variants={item} whileHover={{ scale: scale }} transition={{duration: 0.2, ease: "easeOut"}}>
                <Tooltip title="Archive notes" style='lightblue'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
            </motion.li>
            <motion.li variants={item} whileHover={{ scale: scale }} transition={{duration: 0.2, ease: "easeOut"}}>
                <Tooltip title="Archive notes" style='pink'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
            </motion.li>
            <motion.li variants={item} whileHover={{ scale: scale }} transition={{duration: 0.2, ease: "easeOut"}}>
                <Tooltip title="Archive notes" style='lightpink'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
            </motion.li>
            <motion.li variants={item} whileHover={{ scale: scale }} transition={{duration: 0.2, ease: "easeOut"}}>
                <Tooltip title="Archive notes" style='green'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
            </motion.li>
            <motion.li variants={item} whileHover={{ scale: scale }} transition={{duration: 0.2, ease: "easeOut"}}>
                <Tooltip title="Archive notes" style='lightgreen'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.
                </Tooltip>
            </motion.li>









            </motion.ol>
        </div>
    )
}
