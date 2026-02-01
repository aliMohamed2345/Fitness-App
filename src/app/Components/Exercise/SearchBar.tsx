"use client"
import { useState } from "react"
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    const [searchQuery, setSearchQuery]= useState('')
  return (
    <div className=" border border-border hover:border-primary transition-all relative rounded-full flex  items-center gap-0">
        <button className=" rounded-l-full bg-primary p-2 text-accent transition cursor-pointer">

<IoSearch size={25}/>
        </button>
        <input 
        className="w-full h-full p-2 border-0 outline-0 text-accent-foreground "
        type="text" 
        placeholder="Search by exercise name"  
        value={searchQuery} 
        onChange={(e)=>setSearchQuery(e.target.value)}/>
    </div>
  )
}

export default SearchBar