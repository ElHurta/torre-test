import { UserInfo, FullUserInfo } from '../interfaces';

interface requestBody {
    query: string,
    identityType: string,
    limit?: number
}

const searchUsersByName = async (name: string, limit?: boolean): Promise<UserInfo[]> => {

    const requestBody : requestBody = {
        "query": name,
        "identityType": "person",
    }

    if (limit) {
        requestBody["limit"] = 10;
    }
    
    const response = await fetch('https://torre.ai/api/entities/_search', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });
    const data = await response.json();
    return data.results;
}

const searchFullUsersByGgids = async (ggids: string[]): Promise<FullUserInfo[]> => {

    const requestBody = {
        "ggid": {
            include : ggids
        },
    }

    const response = await fetch(`https://search.torre.co/people/_search`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    return data.results;
}

export { searchUsersByName, searchFullUsersByGgids };