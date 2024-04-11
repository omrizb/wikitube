'use strict'

function onWikiTubeInit() {
    getVideos('beatles')
        .then(renderVideosList)
}

function renderVideosList(videos) {
    let htmlStr = ''

    videos.forEach(video => {
        htmlStr += `
            <li>
                <div class="thumbnail">
                    <img src="${video.thumbnail}">
                </div>
                <p>${video.title}</p>
            </li>
        `
    })

    document.querySelector('.app-container .videos-list').innerHTML = htmlStr
}