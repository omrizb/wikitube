'use strict'

const HISTORY_STORAGE_KEY = 'history'

let gHistory = loadFromLocalStorage(HISTORY_STORAGE_KEY) || {}

function getHistory() {
    return gHistory
}

function saveToHistory(entry) {
    if (gHistory[entry]) gHistory[entry] += 1
    else gHistory[entry] = 1
    saveToLocalStorage(HISTORY_STORAGE_KEY, gHistory)
}

function clearHistory() {
    gHistory = {}
    saveToLocalStorage(HISTORY_STORAGE_KEY, gHistory)
}