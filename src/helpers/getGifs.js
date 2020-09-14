
export const getGifts = async(category) => {
    const urls = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=WPlqAu4h4x6OG4qfm2ksYmoUiIzNtJmE`;
    const resp =  await fetch(urls);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}