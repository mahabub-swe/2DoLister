import React from 'react'
import './TrashButtonStyles.css'
import { VscTrash } from "react-icons/vsc";


export default function TrashButton({todo, todoListUpdater}) {
    function clickHandler(event){
        localStorage.removeItem(todo.id)
        todoListUpdater()
    }
    return (
        <div className = 'trushButton'  onClick={clickHandler}>
            <VscTrash  color = 'wheat' size = '2rem' />
        </div>
    )
}
