import React from 'react'
import Suggestion from './Suggestion'

import './SearchSuggestions.css'

export default function SearchSuggestions({suggestionsByName} : {suggestionsByName: never[]}) {
  return (
    <ul className='suggestions-container'>
        {
          suggestionsByName.map((suggestion: any) => {
            return (
              <li key={suggestion.ggId}>
                  <Suggestion
                    profileData={suggestion}
                  />
              </li>
            )
          })
        }
    </ul>
  )
}
