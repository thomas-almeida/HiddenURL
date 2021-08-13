'use strict'

var setUrl = document.getElementById('setUrl')
var byUrl = "www.ideal"
var btn = document.getElementById('btn')

function getURL() {
    setUrl = window.location.href
    localStorage.setItem('satelite_URL', setUrl);
    console.log('URL PEGA: ' + setUrl)
}

function go() {
    window.location.href = "http://127.0.0.1:5502/lpidealtrends/index.html?destino=" + window.location.href
}