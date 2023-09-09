import React from 'react'
import searchSuggestionsByName from '../services/api-service'

import './SearchBar.css'

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = React.useState('')

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    searchSuggestionsByName(value)
  }

  return (
    <div className='search-bar-container'>
      <input
        value={searchTerm}
        type='text'
        placeholder='Search by name on Torre Database!'
        onChange={
          (e) => {handleSearch(e.target.value)}
        }
      />
      <button>🔎</button>
    </div>
  )
}
