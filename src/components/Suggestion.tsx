import React from 'react'
import { FullUserInfo, UserInfo } from '../interfaces'

import './Suggestion.css'

export default function Suggestion({suggestionData}: {suggestionData: UserInfo | FullUserInfo }) {

    const imageUrl = suggestionData.imageUrl || suggestionData.picture || `https://ui-avatars.com/api/?name=${suggestionData.name}`

    return (
        <article className='suggestion-container'>
            <aside className='profile-pic-container'>
                <img src={imageUrl} alt="placeholder" />
            </aside>
            <main className='profile-info'>
                <h3>{suggestionData.name}</h3>
                <p>{suggestionData.professionalHeadline}</p>
            </main>
        </article>
    )
}
