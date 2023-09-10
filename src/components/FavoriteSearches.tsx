import React from 'react'

import './FavoriteSearches.css'
import { searchFullUsersByGgids } from '../services/api-service'
import { FullUserInfo } from '../interfaces'
import { AiOutlineDown } from 'react-icons/ai'

export default function FavoriteSearches({ favoriteSearches, setFavoriteSearches }: { favoriteSearches: string[], setFavoriteSearches: React.Dispatch<React.SetStateAction<string[]>> }) {


    const [favoriteProfiles, setFavoriteProfiles] = React.useState<FullUserInfo[]>([])

    React.useEffect(() => {
        // Search favoriteSearches
        if (favoriteSearches.length > 0) {
            searchFullUsersByGgids(favoriteSearches)
                .then((fullUsers) => {
                    setFavoriteProfiles(fullUsers)
                })
        }
    }, [favoriteSearches])

    return (
        <article className='favorite-container'>
            <div className='favorite-search'>
                <p>Favorite Searches</p>
                <AiOutlineDown/>
            </div>
        </article>
    )
}
