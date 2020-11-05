import React from 'react'
import {uid} from 'uid'
import './TodoBuilderStyles.css'
import TodoCreator from './TodoCreator/TodoCreator'
import CreateButton from './Create Button/CreateButton'
import TodoFilter from './Todo Filter/TodoFilter'

export default function TodoBuilder({setStatus, todo, setTodo, todoList, setTodoList}) {

    function addTodo(){
        if(todo == '') return
        let todoID = uid(7)
        localStorage.setItem(todoID,JSON.stringify({todo:todo,complete:false,id:todoID}))
        setTodoList([...todoList,{todo:todo,complete:false,id:todoID}])
        setTodo('')
    }

    return (
        <div className = 'todoBuilder'>
            <TodoCreator todo = {todo} setTodo = {setTodo} addTodo={addTodo} />
            <CreateButton addTodo={addTodo} />
            <TodoFilter setStatus={setStatus} />
        </div>
    )
}
