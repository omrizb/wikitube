'use strict'

function onWikiTubeInit(search) {
    getVideos(search)
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

function onSearch(ev) {
    ev.preventDefault()
    const searchVal = ev.target.elements['search-input'].value
    onWikiTubeInit(searchVal)
}