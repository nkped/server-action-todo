import React from 'react'
import Link from 'next/link'


const Todo = (todo: Todo) => {
  return ( //form element parent
    <form>
      <label htmlFor='completed'>
        <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
      </label>
      <div>
        <button>Delete</button>

      </div>
    </form>
  )
}

export default Todo