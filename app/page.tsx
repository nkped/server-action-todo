import React from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

const HomePage = () => {
  return (
    <div background-color='white'>
      <h1>My awsome server action Todos</h1>
      <AddTodo />
      <TodoList /></div>
  )
}

export default HomePage