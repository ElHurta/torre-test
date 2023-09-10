import { FullUserInfo, UserInfo } from '../interfaces'
import { AiOutlineStar } from 'react-icons/ai'

import './Suggestion.css'

export default function Suggestion({suggestionData}: {suggestionData: UserInfo | FullUserInfo }) {

    return (
        <article className='suggestion-container'>
            <aside className='profile-pic-container'>
                <img src={imageUrl} alt="placeholder" />
            </aside>
            <main className='profile-info'>
                <h3>{suggestionData.name}</h3>
                <p>{suggestionData.professionalHeadline}</p>
            </main>
            <AiOutlineStar className='fav-btn'/>
        </article>
    )
}
