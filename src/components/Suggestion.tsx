import React from 'react'
import { UserInfo } from '../interfaces'

import './Suggestion.css'

export default function Suggestion({profileData}: {profileData: UserInfo}) {

    const imageUrl = profileData.imageUrl ? profileData.imageUrl : `https://ui-avatars.com/api/?name=${profileData.name}`

    return (
        <article className='suggestion-container'>
            <aside className='profile-pic-container'>
                <img src={imageUrl} alt="placeholder" />
            </aside>
            <main className='profile-info'>
                <h3>{profileData.name}</h3>
                <p>{profileData.professionalHeadline}</p>
            </main>
        </article>
    )
}
