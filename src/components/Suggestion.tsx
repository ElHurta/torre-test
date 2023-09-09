import React from 'react'

import './Suggestion.css'

export default function Suggestion() {
  return (
    <article className='suggestion-container'>
        <aside className='profile-pic-container'>
            <img  src="https://via.placeholder.com/150" alt="placeholder" />
        </aside>
        <main className='profile-info'>
            <h3>Placeholder</h3>
            <p>Lorem ipsum dolor</p>
        </main>
    </article>
  )
}
