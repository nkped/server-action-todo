'use client'

import React from 'react'
import { updateTodo } from '@/lib/actions'
//import { useTransition } from 'react'
import { experimental_useFormStatus as useformStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import { experimental_useOptimistic as useOptimistic } from 'react'


const UpdateCheckbox = ({todo,}: {todo: Todo,}) => {

    console.log('this is todo: ', todo)
    //const [ isPending, startTransition] = useTransition()
    const { pending } = useformStatus()    
    const router = useRouter()
    const [ optimisticTodo, addOptimisticTodo ] = useOptimistic(todo, (
      state: Todo,
      completed: boolean
    ) => ({...state, completed })
    )

  return (
    <input
      type="checkbox"
      
      checked={optimisticTodo.completed}
      id="completed"
      name="completed"
  //    onChange={() => startTransition(() => updateTodo(todo))}
      onChange={async () =>{ 
        addOptimisticTodo(!todo.completed)
        await updateTodo(todo)
        router.refresh()}}
        disabled={pending}
    
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