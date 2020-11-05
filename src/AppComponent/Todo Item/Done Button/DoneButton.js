import React from 'react'
import './DoneButtonStyles.css'
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";


export default function DoneButton({todo, todoListUpdater, completeStatus}) {
    function clickHandler(){
        localStorage.setItem(todo.id,JSON.stringify({todo:todo.todo,complete:!completeStatus,id:todo.id}))
        todoListUpdater()
    }
    return (
        completeStatus?
        <button className = 'doneButton' style={{cursor:'not-allowed'}}>
            <FcCancel color = 'wheat' size = '2rem'/>
        </button>:
        <button className = 'doneButton' onClick={clickHandler}>
            <FcCheckmark color = 'wheat' size = '2rem'/>
        </button>
    )
}
