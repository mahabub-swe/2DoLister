import React from 'react'
import './TodoFilterStyles.css'

export default function TodoFilter({setStatus}) {

    function selectHandler(event){
        setStatus(event.target.value)
    }

    return (
        <div className = 'todoFilter'>
            <select name="todoFilter" onChange={selectHandler}>
                <option value="All">All</option>
                <option value="Done">Done</option>
                <option value="Undone">Undone</option>
            </select>
        </div>
    )
}
