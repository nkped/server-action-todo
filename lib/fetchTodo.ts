




export default async function fetchTodo(id: string) {

    try {
        const res = await fetch(`http://localhost:3500/todos/${id}`)

        const todo: Todo = await res.json()

        console.log('this is todo from edit todo:', todo)

        return todo

    } catch (err) {
        if (err instanceof Error) console.log(err.stack)
    }
}