import React from 'react'
import './TodoCreatorStyles.css'

export default function TodoCreator({todo, setTodo, addTodo}) {
    
    function onchangeHandler(event){
        setTodo(event.target.value)
    }
    function enterHandler(event){
        if(event.key=='Enter') addTodo()
    }

    return (
        <div className = 'todoCreator'>
            <input onKeyPress={enterHandler} onChange = {onchangeHandler} value = {todo} type="text" placeholder = 'place your todo.....'/>
        </div>
    )
}
