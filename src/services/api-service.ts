
const searchSuggestionsByName = async (name: string) => {
    const response = await fetch(
        `https://torre.ai/api/entities/_searchStream`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'limit': 10,
                'query': name
            }),
        });
    const data = await response.json();
    return data;
}



export default searchSuggestionsByName;