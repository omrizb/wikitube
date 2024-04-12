'use strict'

let gVideos

function onWikiTubeInit(search) {
    getVideos(search)
        .then(renderVideosList)
    getWiki(search, 3)
        .then(renderWiki)
}

function renderVideosList(videos) {
    let htmlStr = ''

    gVideos = videos

    videos.forEach((video, idx) => {
        htmlStr += `
            <li onclick="onPlayVideo(${idx})">
                <div class="thumbnail">
                    <img src="${video.thumbnail}">
                </div>
                <p>${video.title}</p>
            </li>
        `
    })

    document.querySelector('.app-container .videos-list').innerHTML = htmlStr
}

function renderWiki(wikiEntries) {
    let htmlStr = ''

    wikiEntries.forEach(entry => {
        htmlStr += `
            <p class="entry-title">${entry.title}</p>
            <p class="entry-snippet">${entry.snippet}</p>
        `
    })

    document.querySelector('.wiki-entry').innerHTML = htmlStr
}

function onSearch(ev) {
    ev.preventDefault()
    const searchVal = ev.target.elements['search-input'].value
    onWikiTubeInit(searchVal)
}

function onPlayVideo(idx) {
    playVideo(gVideos[idx].videoUrl)
}

function playVideo(url) {
    document.querySelector('.player').setAttribute('src', url)
}