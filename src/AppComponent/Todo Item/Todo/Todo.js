import React from 'react'
import './TodoStyles.css'

export default function Todo({todo, completeStatus}) {
    return (
        <div className = 'todo'>
           {completeStatus?<h3><del>{todo}</del></h3>: <h3 style={{color:'wheat'}}>{todo}</h3>}
        </div>
    )
}
