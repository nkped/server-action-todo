import React from 'react'

const TodoList = async () => {
  
    const res = await fetch("http://localhost:3500/todos", { next: { revalidate: 0 }})

    const todos: Todo[] = await res.json()


    console.log('todos fromssa wwk todolist', todos)
  return (
    <div>TodoList</div>
  )
}

export default TodoList