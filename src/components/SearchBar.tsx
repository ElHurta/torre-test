import React from 'react'
import searchSuggestionsByName from '../services/api-service'

import './SearchBar.css'

export default function SearchBar({
    setSuggestionsByName
  }: {setSuggestionsByName: React.Dispatch<React.SetStateAction<never[]>>}) {

  const [searchTerm, setSearchTerm] = React.useState('')

  React.useEffect(() => {
    if (searchTerm.length > 2) {
      searchSuggestionsByName(searchTerm).then((res) => {
        setSuggestionsByName(res)
      })
    }
  }, [searchTerm, setSuggestionsByName])

  const handleSearch = (value: string) => {
    setSearchTerm(value)
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
