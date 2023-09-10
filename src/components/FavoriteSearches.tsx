import React from 'react'

import './FavoriteSearches.css'
import { AiFillDownCircle } from 'react-icons/ai'

export default function FavoriteSearches({showFavorites, setShowFavorites }: { showFavorites: boolean, setShowFavorites: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <section className='favorite-container' onClick={
            () => {
                setShowFavorites(!showFavorites)
            }   
        }>
            <div className='favorite-search'>
                <p>Favorite Searches</p>
                <AiFillDownCircle/>
            </div>
        </section>
    )
}
