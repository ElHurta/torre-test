import React from 'react'
import Suggestion from './Suggestion'
import { FullUserInfo, UserInfo } from '../interfaces'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import './SearchSuggestions.css'

export default function SearchSuggestions(
  {suggestionsByName, suggestionsByGgId, recentSearches, favoriteSearches, setRecentSearches, setFavoriteSearches} : {suggestionsByName: UserInfo[], suggestionsByGgId: FullUserInfo[] , recentSearches: string[], favoriteSearches: string[],  setRecentSearches: React.Dispatch<React.SetStateAction<string[]>>, setFavoriteSearches: React.Dispatch<React.SetStateAction<string[]>>}
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

  const toggleFavoriteSearch = (ggid: string) => {
    if (favoriteSearches.includes(ggid)) {
      setFavoriteSearches(favoriteSearches.filter((favoriteSearch) => favoriteSearch !== ggid))
    } else {
      setFavoriteSearches([...favoriteSearches, ggid])
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
                <span className='fav-btn' onClick={
                  () => {
                    toggleFavoriteSearch(suggestion.ggId)
                  }
                }>
                  {
                    favoriteSearches.includes(suggestion.ggId) ? <AiFillStar /> : <AiOutlineStar/>
                  }
                </span>
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
                <span className='fav-btn' onClick={
                  () => {
                    toggleFavoriteSearch(suggestion.ggId)
                  }
                }>
                  {
                    favoriteSearches.includes(suggestion.ggId) ? <AiFillStar /> : <AiOutlineStar/>
                  }
                </span>
              </li>
            )
          })
        }
    </ul>
  )
}
