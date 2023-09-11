import React from "react";
import Todo from "@/app/components/Todo";
import fetchTodo from "@/lib/fetchTodo";
import { notFound } from 'next/navigation'
import Link from "next/link";

type Props = {
  params: {
    id: string
  }
}


const EditPage = async ({params: {id}}: Props) => {

  const todo = await fetchTodo(id)

  if(!todo) return notFound()

  console.log('this is todo from edit page: ', todo)

  
  return (
    <>
    <Todo {...todo} />
    <Link href='/'>Back to Todolist</Link>
    </>
  )
}

export default EditPage