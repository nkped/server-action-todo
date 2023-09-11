import React from 'react'
import Link from 'next/link'
import { deleteTodo } from "@/lib/actions"
import UpdateCheckbox from "./UpdateCheckbox"

export default function Todo(todo: Todo) {

    return (
        <form>

            <label htmlFor="completed">
                <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
            </label>

            <div>
                <UpdateCheckbox todo={todo} />

                <button
                    formAction={async () => {
                        'use server'
                        await deleteTodo(todo)
                    }}>
                    DELETE
                </button>
            </div>
        </form>
    )
}