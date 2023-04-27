import React from 'react'
import {Todo} from '../../../typings'
import {notFound} from "next/navigation";

export const dynamicParams = true

type PageProps = {
    params : {
        todoId: string
    }
}

const fetchTodo = async (todoId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {next: {revalidate: 45}})
    const todo : Todo = await res.json();
    return todo
}


async function TodoPage({params: {todoId}} : PageProps) {
  const todo = await fetchTodo(todoId);

  if(!todo.id) return notFound()
  return (
    <div className='p-10 bg-green-500 border-3 m-2 shadow-lg'>
        <p>
            #{todo.id}: {todo.title}
        </p>
        <p>Completed: {todo.completed? "YUP" : "NAH" }</p>

        <p className='border-t border-black mt-6 text-right'>
            By User: {todo.userId}
        </p>
    </div>
  )
}

export default TodoPage

export async function generateStaticParams(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    const todos: Todo[] = await res.json();

    //avoid rate limited by API

    const trimmedTodos = todos.splice(0, 20)

    return todos.map((todo)=> ({
        todoId: todo.id.toString(),
    }))
}

