import React from 'react'
import Todo from "./Todo"
import fetchTodos from "@/lib/fetchTodos"

export default async function TodoList() {
    const todos = await fetchTodos()

    let content
    if (!todos || todos.length === 0) {
        content = (
            <div>No Todos Available</div>
        )
    } else {
        const sortedTodos = todos.reverse()

        content = (
            <div>
                {sortedTodos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </div>
        )
    }

    return content
}