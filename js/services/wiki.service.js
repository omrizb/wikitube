'use strict'

function getWiki(searchVal, numOfResults) {
    return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${searchVal}&format=json`)
        .then(res => {
            console.log(res.data)
            return res
        })
        .then(res => {
            const entries = []
            for (let i = 0; i < numOfResults; i++) {
                entries.push({
                    title: res.data.query.search[i].title,
                    snippet: res.data.query.search[i].snippet
                })
            }
            return entries
        })
        .catch(console.error)
}