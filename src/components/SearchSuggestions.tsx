import React from 'react'
import Suggestion from './Suggestion'
import { UserInfo } from '../interfaces'

import './SearchSuggestions.css'

export default function SearchSuggestions({suggestionsByName} : {suggestionsByName: UserInfo[]}) {
  return (
    <ul className='suggestions-container'>
        {
          suggestionsByName.map((suggestion: UserInfo) => {
            return (
              <a target="_blank" href={`https://torre.ai/${suggestion.username}`}>
                <li key={suggestion.ggId}>
                    <Suggestion
                      profileData={suggestion}
                    />
                </li>
              </a>
            )
          })
        }
    </ul>
  )
}
