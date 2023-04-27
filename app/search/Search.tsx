"use client"

import React, { FormEvent, useState } from 'react'
import { useRouter } from "next/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`)
  }
  return (
    <form onSubmit={handleSearch}>
        <input className='text-black'
            type="text" 
            value={search}
            placeholder='Enter your term'
            onChange={(e)=> setSearch(e.target.value)} 
        />
        <button 
            type="submit"
            className='bg-orange-500  font-bold py-2 px-4 rounded-lg'>
            Search
        </button>
    </form>
  )
}

export default Search