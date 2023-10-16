import React, {useState} from 'react'
import Badge from './Badge'
import { motion } from "framer-motion"

export default function BadgeCollection(){
    const scale = 1.2;
    const container = {
        invisible: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            }}
    }
    const item = {
        invisible: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
        }
    }

    return (
        <motion.div className='badge-component-layout' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, ease: "easeInOut"}} viewport={{once: true}}>
            <h1 className="badge-grid__title section__header">Badge Component</h1>
            <motion.ol
                className="badge-grid"
                variants={container}
                initial="invisible"
                whileInView="visible"
                viewport={{once:true}}
            >
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="square" color="gray">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="pill" color="gray">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="square" color="red">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="pill" color="red">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="square" color="yellow">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="pill" color="yellow">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="square" color="green">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="pill" color="green">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="square" color="blue">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="pill" color="blue">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="square" color="indigo">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="pill" color="indigo">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="square" color="purple">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="pill" color="purple">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="square" color="pink">
                        Badge
                    </Badge>
                </motion.li>
                <motion.li variants={item} whileHover={{ scale: scale }}>
                    <Badge shape="pill" color="pink">
                        Badge
                    </Badge>
                </motion.li>
            </motion.ol>
        </motion.div>
    )
}
