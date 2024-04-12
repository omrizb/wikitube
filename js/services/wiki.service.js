'use strict'

function getWiki(searchVal) {
    return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${searchVal}&format=json`)
        .then(res => ({
            title: res.data.query.search[0].title,
            snippet: res.data.query.search[0].snippet
        }))
        .catch(console.error)
}