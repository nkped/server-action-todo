import React from 'react'
import fetchTodos from '@/lib/fetchTodos'

const TodoList = async () => {

  const todos = await fetchTodos()
  
  console.log('todos fromssssa wwk todolist', todos)
  
  return (
    <div>TodoList</div>
  )
}

export default TodoList