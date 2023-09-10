import React from 'react'

import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'
import SearchSuggestions from './components/SearchSuggestions'

import './App.css'
import { FullUserInfo, UserInfo } from './interfaces'
import { getFrecuentSearches, saveFrecuentSearches } from './services/session-storage'

function App() {

  const [suggestionsByName, setSuggestionsByName] = React.useState<UserInfo[]>([])
  const [suggestionsByGgId, setSuggestionsByGgId] = React.useState<FullUserInfo[]>([])

  const [recentSearches, setRecentSearches] = React.useState<string[]>(
    getFrecuentSearches() || []
  )

  React.useEffect(() => {
    // Save recent searches state to session storage
    saveFrecuentSearches(recentSearches)
  }, [recentSearches])

  return (
    <>
      <main className='main-container'>
        <header className='header'>
          <h1>Torre Technical Test - Juan Hurtado</h1>
        </header>
        <section className='search-section'>
          <header className='search-header'>
            <h2>Search People By Name 🔎</h2>
            <p>Click on the Empty Search Bar to see your recent searches</p>
            <p>Type on the Search Bar to get suggestions, Click on the search button or Press Enter to get a Full Search from your input</p>
            
          </header>
          <section>
            <SearchBar
              setSuggestionsByName={setSuggestionsByName}
              setSuggestionsByGgId={setSuggestionsByGgId}
              recentSearches={recentSearches}
            />
            <SearchSuggestions
              suggestionsByName={suggestionsByName}
              suggestionsByGgId={suggestionsByGgId}
              recentSearches={recentSearches}
              setRecentSearches={setRecentSearches}
            />
            {/* <ResultsList/> */}
          </section>
        </section>
      </main>
    </>
  )
}

export default App
