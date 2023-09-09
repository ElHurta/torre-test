import './App.css'
import SearchBar from './components/SearchBar'
import ResultsList from './components/ResultsList'

function App() {

  return (
    <>
      <header>
        <h1>Torre Technical Test</h1>
      </header>
        <h2>Juan Hurtado</h2>
      <main>
        <h1>People By Name</h1>
        <section>
          <SearchBar></SearchBar>
          <ResultsList></ResultsList>
        </section>
      </main>
    </>
  )
}

export default App
