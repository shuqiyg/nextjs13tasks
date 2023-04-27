import Image from 'next/image'
import React, {Suspense} from "react"
import { Inter } from 'next/font/google'
import TodosList from "./todos/TodosList"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-white'>
      <Suspense fallback={<p className='text-red-700'>Loading Todos...</p>}>
        <h1>Loading Todos</h1>
        <div className='flex space-x-2'>
          <TodosList></TodosList>
        </div>
      </Suspense>

      <Suspense fallback={<p className='text-blue-600'>Loading Shopping cart...</p>}>
        <h1>Laoding Shopping Cart</h1>
        <div className='flex space-x-2'>
          <TodosList></TodosList>
        </div>
      </Suspense>  
    </div> 
  )
}

