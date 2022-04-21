export const getLatestNews = async(searchQery) => {
    const request = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchQery}&hitsPerPage=10&page=0`);
    return await request.json();
}

export const getPopularNews = async() => {
    const request = await fetch(`https://hn.algolia.com/api/v1/search?query=&hitsPerPage=10&page=0`);
    return await request.json();
}