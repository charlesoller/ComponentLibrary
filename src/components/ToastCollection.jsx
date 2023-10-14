import React from 'react'
import Toast from './Toast'

export default function ToastCollection(){
    return (
        <div className="toast-grid">
            <h1 className="toast-grid__title">Toast Component</h1>
            <Toast title='Success' status='success'>
                Your work has been saved
            </Toast>
            {/* <Toast title='Warning' status='warning'>
                A network error was detected
            </Toast>
            <Toast title='Information' status='neutral'>
                Please read updated information
            </Toast>
            <Toast title='Error' status='error'>
                Please resave your work again
            </Toast> */}
        </div>
    )
}
