import React from 'react'
import {Todo} from "../../typings"
import Link from "next/link"

const fetchTodos = async ()=> {
    //randam timeout secs to test Suspense
    const timeout = Math.floor(Math.random() * 2 + 1) * 1000
    await new Promise((resolve)=> setTimeout(resolve, timeout))
    const res = await fetch("http://jsonplaceholder.typicode.com/todos");
    const todos: Todo[]= await res.json()
    //this line will only print on the server terminal not on the browser because this page of code is server side rendering
    console.log("this is the todos from server")
    return todos;
}

async function TodosList() {
  const todos = await fetchTodos()
  console.log(todos)
  return (
    <>
        {todos.map((todo)=>(
            <p key={todo.id}>
                <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
            </p>
        ))}
    </>
  )
}

export default TodosList


