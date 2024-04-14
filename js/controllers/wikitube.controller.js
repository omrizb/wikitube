'use strict'

let gVideos

function onWikiTubeInit(search) {
    renderHistory(getHistory())

    getVideos(search)
        .then(renderVideosList)

    getWiki(search, 3)
        .then(renderWiki)
}

function renderHistory(history) {
    let htmlStr = ''

    if (!history || Object.keys(history).length === 0) htmlStr += '<li>No history...</li>'
    Object.keys(history).forEach(key => htmlStr += `<li onclick="onClickHistory('${key}')">${key}</li>`)

    document.querySelector('.search-history .entries').innerHTML = htmlStr
}

function renderVideosList(videos) {
    gVideos = videos

    const htmlStr = videos.map((video, idx) => `
            <li onclick="onPlayVideo(${idx})">
                <div class="thumbnail">
                    <img src="${video.thumbnail}">
                </div>
                <p>${video.title}</p>
            </li>
        `
    ).join('')

    document.querySelector('.app-container .videos-list').innerHTML = htmlStr
}

function renderWiki(wikiEntries) {
    const htmlStr = wikiEntries.map(entry => `
            <p class="entry-title">${entry.title}</p>
            <p class="entry-snippet">${entry.snippet}</p>
        `
    ).join('')

    document.querySelector('.wiki-entries').innerHTML = htmlStr
}

function onClickHistory(entry) {
    saveToHistory(entry)
    onWikiTubeInit(entry)
}

function onClearHistory() {
    clearHistory()
    renderHistory({})
}

function onSearch(ev) {
    ev.preventDefault()
    const searchVal = ev.target.elements['search-input'].value
    saveToHistory(searchVal)
    onWikiTubeInit(searchVal)
}

function onPlayVideo(idx) {
    playVideo(gVideos[idx].videoUrl)
}

function playVideo(url) {
    document.querySelector('.player').setAttribute('src', url)
}