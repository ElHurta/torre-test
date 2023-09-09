import React from 'react'

import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'
import SearchSuggestions from './components/SearchSuggestions'

import './App.css'
import { UserInfo } from './interfaces'

function App() {

  const [suggestionsByName, setSuggestionsByName] = React.useState<UserInfo[]>([])

  return (
    <>
      <main className='main-container'>
        <header className='header'>
          <h1>Torre Technical Test - Juan Hurtado</h1>
        </header>
        <section className='search-section'>
          <h2>Search People By Name 🔎</h2>
          <section>
            <SearchBar
              setSuggestionsByName={setSuggestionsByName}
            />
            <SearchSuggestions
              suggestionsByName={suggestionsByName}
            />
            {/* <ResultsList></ResultsList> */}
          </section>
        </section>
      </main>
    </>
  )
}

export default App
