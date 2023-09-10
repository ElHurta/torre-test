
const saveFrecuentSearches = (searches: string[]) => {
    sessionStorage.setItem('frecuentSearches', JSON.stringify(searches));
}

const getFrecuentSearches = (): string[] => {
    const frecuentSearches = sessionStorage.getItem('frecuentSearches');
    if (frecuentSearches) {
        return JSON.parse(frecuentSearches);
    }
    return [];
}

const saveFavoriteUsers = (users: string[]) => {
    sessionStorage.setItem('favoriteUsers', JSON.stringify(users));
}

const getFavoriteUsers = (): string[] => {
    const favoriteUsers = sessionStorage.getItem('favoriteUsers');
    if (favoriteUsers) {
        return JSON.parse(favoriteUsers);
    }
    return [];
}

export { saveFrecuentSearches, getFrecuentSearches, saveFavoriteUsers, getFavoriteUsers };