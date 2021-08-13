'use strict'

var setUrl = document.getElementById('setUrl')

function getURL() {
    setUrl = window.location.href
    localStorage.setItem('Back_URL', setUrl);
    console.log('URL PEGA: ' + setUrl)
}