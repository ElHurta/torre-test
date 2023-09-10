import React from 'react'
import Suggestion from './Suggestion'
import { FullUserInfo, UserInfo } from '../interfaces'
import { AiOutlineStar } from 'react-icons/ai'

import './SearchSuggestions.css'

export default function SearchSuggestions(
  {suggestionsByName, suggestionsByGgId, recentSearches, setRecentSearches} : {suggestionsByName: UserInfo[], suggestionsByGgId: FullUserInfo[] , recentSearches: string[], setRecentSearches: React.Dispatch<React.SetStateAction<string[]>>}
  ) {

  const handleRecentSearch = (ggid: string) => {
    // Add ggid to recent searches
    if (!recentSearches.includes(ggid)) {
      if(recentSearches.length >= 10){
        recentSearches.pop()
      }
      setRecentSearches([...recentSearches, ggid])
    }
  }

  if (suggestionsByGgId.length > 0) {
    return (
      <ul className='suggestions-container'>
          {
            suggestionsByGgId.map((suggestion: FullUserInfo) => {
              return (
                <li
                key={suggestion.subjectId}
                className='search-result'
                >
                <a
                  target="_blank"
                  href={`https://torre.ai/${suggestion.username}`}
                  onClick={
                    () => {handleRecentSearch(suggestion.ggId)}
                  }>
                  <Suggestion
                    suggestionData={suggestion}
                    imgUrl = {suggestion.picture}
                  />
                </a>
                <AiOutlineStar className='fav-btn'/>
              </li>
              )
            })
          }
      </ul>
    )
  }

  return (
    <ul className='suggestions-container'>
        {
          suggestionsByName.map((suggestion: UserInfo) => {
            return (
              <li
                key={suggestion.ardaId || suggestion.ggId}
                className='search-result'
                >
                <a
                  target="_blank"
                  href={`https://torre.ai/${suggestion.username}`}
                  onClick={
                    () => {handleRecentSearch(suggestion.ggId)}
                  }>
                  <Suggestion
                    suggestionData={suggestion}
                    imgUrl = {suggestion.imageUrl}
                  />
                </a>
                <AiOutlineStar className='fav-btn'/>
              </li>
            )
          })
        }
    </ul>
  )
}
