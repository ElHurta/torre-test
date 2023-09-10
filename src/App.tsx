import React from 'react'

import SearchBar from './components/SearchBar'
import SearchSuggestions from './components/SearchSuggestions'

import './App.css'
import { FullUserInfo, UserInfo } from './interfaces'
import { getFrecuentSearches, saveFrecuentSearches, getFavoriteUsers, saveFavoriteUsers } from './services/session-storage'
import FavoriteSearches from './components/FavoriteSearches'

function App() {

  const [showSuggestions, setShowSuggestions] = React.useState<boolean>(false)

  const [suggestionsByName, setSuggestionsByName] = React.useState<UserInfo[]>([])
  const [suggestionsByGgId, setSuggestionsByGgId] = React.useState<FullUserInfo[]>([])

  const [recentSearches, setRecentSearches] = React.useState<string[]>(
    getFrecuentSearches() || []
  )

  const [favoriteSearches, setFavoriteSearches] = React.useState<string[]>(
    getFavoriteUsers() || []
  )

  React.useEffect(() => {
    // Save recent searches state to session storage
    saveFrecuentSearches(recentSearches)
  }, [recentSearches])

  React.useEffect(() => {
    // Save favorite searches state to session storage
    saveFavoriteUsers(favoriteSearches)
  }, [favoriteSearches])

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
            <p>Click on the star button ⭐ to save your search</p>
          </header>
          <section>
            <article className='main-content'>
              <SearchBar
                setShowSuggestions={setShowSuggestions}
                setSuggestionsByName={setSuggestionsByName}
                setSuggestionsByGgId={setSuggestionsByGgId}
                recentSearches={recentSearches}
              />
              <FavoriteSearches
                favoriteSearches={favoriteSearches}
                setFavoriteSearches={setFavoriteSearches}
              />
            </article>
            {
              showSuggestions && (
                <SearchSuggestions
                  suggestionsByName={suggestionsByName}
                  suggestionsByGgId={suggestionsByGgId}
                  recentSearches={recentSearches}
                  favoriteSearches={favoriteSearches}
                  setFavoriteSearches={setFavoriteSearches}
                  setRecentSearches={setRecentSearches}
                />
              )
            }
          </section>
        </section>
      </main>
    </>
  )
}

export default App
