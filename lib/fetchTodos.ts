import React from 'react'





const fetchTodos = async () => {
    const res = await fetch("http://localhost:3500/todos", { next: { revalidate: 0 }})

    const todos: Todo[] = await res.json()

    return todos


}

export default fetchTodos