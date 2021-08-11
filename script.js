'use strict'

var botao = document.getElementById('enviar')
var pegarUrl = document.getElementById('pegarURL')

botao.addEventListener('click', function() {

    //Add a url atual no input hidden
    pegarUrl.value = window.location.href
    window.location.href

    alert(pegarUrl.value)

})

// backdoor/indexhtml