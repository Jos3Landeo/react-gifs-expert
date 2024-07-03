export const getGifs = async (newCategory) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QxwSDJ2ltAiUkKkI3UvrDAQrDe6FYYc7&q=${ newCategory }&limit=10 `
    const resp = await fetch(url)  
    const {data} = await resp.json()

    console.log(data);

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_large.url,
    }))
    return gifs
}  