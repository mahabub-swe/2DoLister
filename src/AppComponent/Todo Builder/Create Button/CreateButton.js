import React from 'react'
import './CreateButtonStyles.css'

export default function CreateButton({addTodo}) {
    function clickHandler(){       
        addTodo()
    }
    return (
        <div className = 'createButton'>
            <button onClick = {clickHandler}>Add Todo</button>
        </div>
    )
}