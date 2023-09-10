import React from 'react'
import {searchUsersByName, searchFullUsersByGgids} from '../services/api-service'

import { FullUserInfo, UserInfo } from '../interfaces'

import './SearchBar.css'

export default function SearchBar({setSuggestionsByName, setSuggestionsByGgId, recentSearches}: {setSuggestionsByName: React.Dispatch<React.SetStateAction<UserInfo[]>>,setSuggestionsByGgId: React.Dispatch<React.SetStateAction<FullUserInfo[]>> ,recentSearches: string[]}) {

  const [searchTerm, setSearchTerm] = React.useState('')
  
  React.useEffect(() => {
    if (searchTerm.length > 2) {
      searchUsersByName(searchTerm, true).then((res) => {
        setSuggestionsByName(res)
        setSuggestionsByGgId([])
      })
    } else {
      setSuggestionsByName([])
    }
  }, [searchTerm, setSuggestionsByName, setSuggestionsByGgId])

  const handleChangeOnInput = (value: string) => {
    setSearchTerm(value)
  }

  const handleRecentSearch = () => {
    // Search from recent searches ggid
    if (recentSearches.length > 0 && searchTerm.length === 0) {
      searchFullUsersByGgids(recentSearches).then((res) => {
        setSuggestionsByGgId(res)
      })
    }
  }

  return (
    <div className='search-bar-container'>
      <input
        value={searchTerm}
        type='text'
        placeholder='Search by name on Torre Database!'
        onClick={handleRecentSearch}
        onChange={
          (e) => {handleChangeOnInput(e.target.value)}
        }
      />
      <button
        className='search-btn'
        >🔎</button>
    </div>
  )
}
