import React from 'react'
import {uid} from 'uid'
import './App.css';
import AppName from './AppComponent/App Name/AppName'
import TodoBuilder from './AppComponent/Todo Builder/TodoBuilder'
import TodoItem from './AppComponent/Todo Item/TodoItem'

function App() {
  const [todo,setTodo] = React.useState('')
  const [status,setStatus] = React.useState('')
  const [todoList,setTodoList] = React.useState([])
    
  React.useEffect(()=>{
      todoListUpdater()
  },[])

  function todoListUpdater(){
    let items = []
    let itemNumber = localStorage.length
    while(itemNumber>0){
      items.push(JSON.parse(localStorage.getItem(localStorage.key(--itemNumber))))  
    }
    setTodoList(items.reverse())  
  }

  return (
    <div className="app">
      <AppName/>
      <TodoBuilder setStatus={setStatus} todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
     
        {  
          (()=>{
            switch(status){
              case 'Done':
                return todoList.filter(todo=>todo.complete==true).map(todo=><TodoItem key={uid(3)} todo={todo} todoListUpdater={todoListUpdater} />)
                break;
              case 'Undone':
                return todoList.filter(todo=>todo.complete==false).map(todo=><TodoItem key={uid(3)} todo={todo} todoListUpdater={todoListUpdater} />)
                break;
              default:
                return todoList.map(todo=><TodoItem key={uid(3)} todo={todo} todoListUpdater={todoListUpdater} />)
            } 
          })() 
        }

    </div>
  );
}

export default App;
