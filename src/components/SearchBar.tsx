import React from 'react'
import {searchUsersByName, searchFullUsersByGgids} from '../services/api-service'

import { FullUserInfo, UserInfo } from '../interfaces'

import './SearchBar.css'

export default function SearchBar({setShowSuggestions, setSuggestionsByName, setSuggestionsByGgId, recentSearches}: {setShowSuggestions :  React.Dispatch<React.SetStateAction<boolean>>, setSuggestionsByName: React.Dispatch<React.SetStateAction<UserInfo[]>>,setSuggestionsByGgId: React.Dispatch<React.SetStateAction<FullUserInfo[]>> ,recentSearches: string[]}) {

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

    setShowSuggestions(true)
    // Search from recent searches ggid
    if (recentSearches.length > 0 && searchTerm.length === 0) {
      searchFullUsersByGgids(recentSearches).then((res) => {
        setSuggestionsByGgId(res)
      })
    }
  }

  const handleClickedSearch = () => {
    // SearchByName no limit
    if (searchTerm.length > 2) {
      searchUsersByName(searchTerm, false).then((res) => {
        setSuggestionsByName(res)
        setSuggestionsByGgId([])
      })
    }
  }

  return (
    <div className='search-bar-container'>
      <input
        value={searchTerm}
        type='text'
        placeholder='Search by name on Torre Database!'
        onFocus={handleRecentSearch}
        onBlur={() => {
          setShowSuggestions(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleClickedSearch()
          }
        }}
        onChange={
          (e) => {handleChangeOnInput(e.target.value)}
        }
      />
      <button
        className='search-btn'
        onClick={handleClickedSearch}
        >🔎</button>
    </div>
  )
}
