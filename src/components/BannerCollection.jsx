import React from 'react'
import Banner from './Banner'
import { motion } from "framer-motion"


export default function BannerCollection(){
    const scale = 1.05;

    return (
        <motion.div className='banner-grid' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, ease: "easeInOut"}}>
            <h1 className="banner-grid__title section__header">Banner Component</h1>
            <motion.div
                layout
                initial={{ x: "-50vw" }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: scale }}
            >
                <Banner status="neutral" message="Update available">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>
            </motion.div>
            <motion.div
                layout
                initial={{ x: "-50vw" }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: scale }}
            >
                <Banner status="neutral" message="Update available" />
            </motion.div>
            <motion.div
                layout
                initial={{ x: "-50vw" }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: scale }}
            >
                <Banner status="success" message="Congratulations!">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                </Banner>
            </motion.div>
            <motion.div
                layout
                initial={{ x: "-50vw" }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: scale }}
            >
                <Banner status="success" message="Congratulations!" />
            </motion.div>
            <motion.div
                layout
                initial={{ x: "-50vw" }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: scale }}
            >
                <Banner status="warning" message="Attention">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                </Banner>
            </motion.div>
            <motion.div
                layout
                initial={{ x: "-50vw" }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: scale }}
            >
                <Banner status="warning" message="Attention" />
            </motion.div>
            <motion.div
                layout
                initial={{ x: "-50vw" }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: scale }}
            >
                <Banner status="error" message="There is a problem with your application">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
                </Banner>
            </motion.div>
            <motion.div
                layout
                initial={{ x: "-50vw" }}
                whileInView={{ x: 0 }}
                transition={{
                    duration: 1.2,
                    ease: "backOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: scale }}
            >
                <Banner status="error" message="There is a problem with your application" />
            </motion.div>
        </motion.div>
    )
}
