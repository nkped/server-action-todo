'use server'


'use server'

import { revalidatePath } from "next/cache"

export async function addTodo(data: FormData) {

    const title = data.get("title")

    await fetch('http://localhost:3500/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 1, title, completed: false,
        })
    })

    revalidatePath('/')
}
