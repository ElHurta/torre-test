import React from 'react'
import Suggestion from './Suggestion'

import './SearchSuggestions.css'

export default function SearchSuggestions() {
  return (
    <ul className='suggestions-container'>
        <li>
            <Suggestion></Suggestion>
        </li>
    </ul>
  )
}
