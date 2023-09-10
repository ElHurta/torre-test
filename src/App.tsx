import React from 'react'

import SearchBar from './components/SearchBar'
import SearchSuggestions from './components/SearchSuggestions'

import './App.css'
import { FullUserInfo, UserInfo } from './interfaces'
import { getFrecuentSearches, saveFrecuentSearches, getFavoriteUsers, saveFavoriteUsers } from './services/session-storage'
import FavoriteSearches from './components/FavoriteSearches'
import { searchFullUsersByGgids } from './services/api-service'

function App() {

  const [showSuggestions, setShowSuggestions] = React.useState<boolean>(false)
  const [showFavorites, setShowFavorites] = React.useState<boolean>(false)

  const [suggestionsByName, setSuggestionsByName] = React.useState<UserInfo[]>([])
  const [suggestionsByGgId, setSuggestionsByGgId] = React.useState<FullUserInfo[]>([])

  const [favoriteProfiles, setFavoriteProfiles] = React.useState<FullUserInfo[]>([])

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

  React.useEffect(() => {
    // Search favoriteSearches
    if (favoriteSearches.length > 0) {
        searchFullUsersByGgids(favoriteSearches)
            .then((fullUsers) => {
                setFavoriteProfiles(fullUsers)
            })
    }
  }, [favoriteSearches])

  React.useEffect(() => {
    // Select content to show
    if (showFavorites) {
      setSuggestionsByGgId(favoriteProfiles)
      setShowSuggestions(true)
    } else {
      setSuggestionsByGgId([])
    }
  }, [showFavorites, favoriteProfiles])

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
                showFavorites={showFavorites}
                setShowFavorites={setShowFavorites}
              />
            </article>
            {
              showSuggestions && (
                <SearchSuggestions
                  suggestionsByName={suggestionsByName}
                  suggestionsByGgId={suggestionsByGgId}
                  recentSearches={recentSearches}
                  favoriteSearches={favoriteSearches}
                  setRecentSearches={setRecentSearches}
                  setFavoriteSearches={setFavoriteSearches}
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
