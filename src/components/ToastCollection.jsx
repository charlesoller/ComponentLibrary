import React, {useState} from 'react'
import Toast from './Toast'

export default function ToastCollection(){
    const [ visible, setVisible ] = useState(false);
    const [ currToast, setCurrToast ] = useState(0);
    const [ timer, setTimer ] = useState();

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
            <h1 className="toast-grid__title">Toast Component</h1>
            <button className="toast-button" onClick={toggleToast}>Click Me!</button>
            {visible && toastArr[currToast]}
        </div>
    )
}
