'use strict'

const STORAGE_KEY = 'youtubeData'
const YOUTUBE_DATA_API_KEY = 'AIzaSyA2ia5C6WOUHLzC3_MP1GOZs6pDEv3ga3c'

function getVideos(value) {
    const data = loadFromLocalStorage(STORAGE_KEY)
    if (data) return Promise.resolve(data)

    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YOUTUBE_DATA_API_KEY}&q=${value}`)
        .then(res => {
            let ans = res.data.items.map(item => ({
                title: item.snippet.title,
                videoUrl: `https://www.youtube.com/embed/${item.id.videoId}`,
                thumbnail: item.snippet.thumbnails.high.url
            }))
            saveToLocalStorage(STORAGE_KEY, ans)
            return ans
        })
        .catch(console.error)
}