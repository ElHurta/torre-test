
const searchSuggestionsByName = async (name: string) => {
    const response = await fetch('https://torre.ai/api/entities/_search', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "query": name,
            "limit": 10
        })
    });
    const data = await response.json();
    return data.results;
}

export default searchSuggestionsByName;