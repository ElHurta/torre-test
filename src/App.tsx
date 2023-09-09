import './App.css'
import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'
import SearchSuggestions from './components/SearchSuggestions'

function App() {

  return (
    <>
      <main className='main-container'>
        <header className='header'>
          <h1>Torre Technical Test - Juan Hurtado</h1>
        </header>
        <section className='search-section'>
          <h2>Search People By Name 🔎</h2>
          <section>
            <SearchBar></SearchBar>
            <SearchSuggestions></SearchSuggestions>
            {/* <ResultsList></ResultsList> */}
          </section>
        </section>
      </main>
    </>
  )
}

export default App
