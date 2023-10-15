import React, {useState} from 'react'
import Card from './Card'
import { FaApple, FaBtc, FaReact } from "react-icons/fa";
import { motion } from "framer-motion"

export default function CardCollection(){
    const [visible, setVisible] = useState(false);
    const container = {
        invisible: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }}
    }
    const item = {
        invisible: { opacity: 0 },
        visible: { opacity: 1 }
    }

    return (
        <div className='card-grid'>
            <h1 className="card-collection__title section__header">Card Component</h1>
            <button onClick={()=> setVisible(visible => !visible)}>CLICK</button>
            <motion.ol
                animate={visible ? "visible" : "invisible"}
                variants={container}
            >
                <motion.li variants={item}>
                    <Card title="Easy Deployment">
                        <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </Card>
                </motion.li>
                <motion.li variants={item}>
                    <Card title="So Modular!" icon={<FaApple size={'1.5rem'} color='lightgray'/>} color='darkgray' width='80%' darkMode='dark'>
                        <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </Card>
                </motion.li>
                <motion.li variants={item}>
                    <Card color='#E66955' icon={<FaBtc color='white'/>} width='55%'>
                        <p>Doesn't even need a title!</p>
                    </Card>
                </motion.li>
                <motion.li variants={item}>
                    <Card title="Or children!" icon={<FaReact size={'1.5rem'} color='lightgray'/>} color='#1C2294' darkMode='dark'/>
                </motion.li>
            </motion.ol>
        </div>
    )
}
