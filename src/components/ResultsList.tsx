import { UserInfo } from '../interfaces'

export default function ResultsList({fullResults}: {fullResults: UserInfo[]}) {
  
  return (
    <main>
      {
        fullResults.map((result: UserInfo) => {
          return (
            <a key={result.ardaId} target="_blank" href={`https://torre.ai/${result.username}`}>
              <section className='result-container'>
                <img src={result.imageUrl} alt='Profile' />
                <section className='result-info'>
                  <h3>{result.name}</h3>
                  <p>{result.professionalHeadline}</p>
                </section>
              </section>
            </a>
          )
        })
      }
    </main>
  )
}
