import { FullUserInfo, UserInfo } from '../interfaces'

import './Suggestion.css'

export default function Suggestion({suggestionData, imgUrl}: {suggestionData: UserInfo | FullUserInfo, imgUrl: string }) {

    const imageURL = imgUrl || `https://ui-avatars.com/api/?name=${suggestionData.name}&background=random`;

    return (
        <article className='suggestion-container'>
            <aside className='profile-pic-container'>
                <img src={imageURL} alt="placeholder" />
            </aside>
            <main className='profile-info'>
                <h3>{suggestionData.name}</h3>
                <p>{suggestionData.professionalHeadline}</p>
            </main>
        </article>
    )
}
