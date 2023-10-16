import React from "react"

export default function Header(){
    function refreshPage(){
        window.location.reload();
    }

    return (
        <div className="header-section">
            <h1 className="header-title" onClick={ refreshPage }>
                Component Library++
            </h1>
        </div>
    )
}
