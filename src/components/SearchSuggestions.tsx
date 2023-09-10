import React from 'react'
import Suggestion from './Suggestion'
import { FullUserInfo, UserInfo } from '../interfaces'

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
                <a
                  key={suggestion.subjectId}
                  target="_blank"
                  href={`https://torre.ai/${suggestion.username}`}>
                  <li>
                      <Suggestion
                        suggestionData={suggestion}
                        imgUrl = {suggestion.picture}
                      />
                  </li>
                </a>
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
              <a
                key={suggestion.ardaId || suggestion.ggId}
                target="_blank"
                href={`https://torre.ai/${suggestion.username}`}
                onClick={
                  () => {handleRecentSearch(suggestion.ggId)}
                }>
                <li>
                    <Suggestion
                      suggestionData={suggestion}
                      imgUrl = {suggestion.imageUrl}
                    />
                </li>
              </a>
            )
          })
        }
    </ul>
  )
}
