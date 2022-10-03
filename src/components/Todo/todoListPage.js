import React from 'react';
import './todo.css';
import Header from '../Header/header'
import Todo from './todo'

function TodoListPage() {
  return (
    <div className='todoListPage__container'>
        <Header/>
        <div className='todoListPage__todo'><Todo/></div>
        
    </div>
  )
}

export default TodoListPage