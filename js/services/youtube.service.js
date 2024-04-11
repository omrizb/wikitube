'use strict'

const YOUTUBE_DATA_API_KEY = 'AIzaSyA2ia5C6WOUHLzC3_MP1GOZs6pDEv3ga3c'

function getVideos(value) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YOUTUBE_DATA_API_KEY}&q=${value}`)
        .then(res => {
            console.log(res)
            return res.data.items.map(item => ({
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.high.url
            }))
        })
}