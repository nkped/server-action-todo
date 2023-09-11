'use client'

import React from 'react'
import { updateTodo } from '@/lib/actions'
import { useTransition } from 'react'


const UpdateCheckbox = ({todo,}: {todo: Todo,}) => {

  console.log('this is todo: ', todo)
    const [ isPending, startTransition] = useTransition()

    console.log('this is todo: ', todo)

  return (
    <input
      type="checkbox"
      
      checked={todo.completed}
      id="completed"
      name="completed"
      onChange={() => startTransition(() => updateTodo(todo))}
      
      disabled={isPending}
    
    />
  )
}

export default UpdateCheckbox


/* 
 <form>
        <input 
            type='checkbox'
            checked={todo.completed} 
            id='completed' 
            name='completed'            
            onChange={() => startTransition(() => updateTodo(todo))} 
             disabled={isPending} 
             />
            
             </form>
*/