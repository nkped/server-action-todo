import React from 'react'
import { addTodo } from '@/lib/actions'



const AddTodo = () => {

  const content = (
    <form action={addTodo}>        

        <input 
            type='text' 
            name='title' 
            placeholder='New Todo' 
            autoFocus 
          />

        <button type='submit'>Submit</button>

    </form>)

    return content
}

export default AddTodo