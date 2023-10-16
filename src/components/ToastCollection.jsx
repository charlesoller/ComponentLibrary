import React, {useState} from 'react'
import Toast from './Toast'
import { motion } from "framer-motion"

export default function ToastCollection(){
    const [ visible, setVisible ] = useState(false);
    const [ currToast, setCurrToast ] = useState(0);
    const [ timer, setTimer ] = useState();
    const scale = 1.05;

    const items = {
        invisible: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }
    }

    const toastArr = [
        <Toast title='Success' status='success'>
            Your work has been saved
        </Toast>,
        <Toast title='Warning' status='warning'>
            A network error was detected
        </Toast>,
        <Toast title='Information' status='neutral'>
            Please read updated information
        </Toast>,
        <Toast title='Error' status='error'>
            Please resave your work again
        </Toast>
    ]

    console.log("FLAG", visible)
    function toggleToast(){
        clearTimeout(timer);
        if(currToast === 3){
            setCurrToast(0);
        } else {
            setCurrToast(prevToast => prevToast + 1)
        }
        setVisible(true);
        setTimer(setTimeout(() => setVisible(false), 5000));
    }
    return (
        <div className="toast-grid">
            <h1 className="toast-grid__title section__header">Toast Component</h1>
            <motion.div whileHover={{scale: scale}}>
                <button className="toast-button" onClick={toggleToast}  transition={{duration: 0.3}}>Click Me!</button>
            </motion.div>
            {visible && toastArr[currToast]}
        </div>
    )
}
