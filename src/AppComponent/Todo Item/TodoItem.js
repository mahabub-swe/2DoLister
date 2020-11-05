import React from 'react'
import './TodoItemStyles.css'
import Todo from './Todo/Todo'
import DoneButton from './Done Button/DoneButton'
import TrashButton from './Trash Button/TrashButton'

export default function TodoItem({todo, todoListUpdater}) {
    const [completeStatus,setCompleteStatus] = React.useState(todo.complete)
    return (
        <div className = 'todoItem' id={todo.id}>
            <Todo todo={todo.todo} completeStatus={completeStatus} />
            <DoneButton todo={todo} todoListUpdater={todoListUpdater} completeStatus={completeStatus}  setCompleteStatus={setCompleteStatus} />
            <TrashButton todo={todo} todoListUpdater={todoListUpdater} />
        </div>
    )
}
