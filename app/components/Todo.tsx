import React from 'react'
import Link from 'next/link'
import { deleteTodo } from '@/lib/actions'


const Todo = (todo: Todo) => {
  return ( //form element parent
    <form>
      <label htmlFor='completed'>
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div>
        <button formAction={async () => {
          'use server'
          await  deleteTodo(todo)
        }}>Delete</button>

      </div>
    </form>
  )
}

export default Todo