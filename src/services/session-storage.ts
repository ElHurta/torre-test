
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

export { saveFrecuentSearches, getFrecuentSearches };