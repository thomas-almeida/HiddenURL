var getUrl = document.getElementById('getUrl')
var inputHidden = document.getElementById('hidden')

//form
var nome = document.getElementById('txtNome')
var email = document.getElementById('txtEmail')
var btn = document.getElementById('enviar')

/*function loadURL() {
    getUrl.innerText = localStorage.getItem('Back_URL')
    inputHidden.value = localStorage.getItem('Back_URL')

    //Valor do Input Hidden
    console.log("IH :" + inputHidden.value)

    //Saída bruta
    console.log("SB :" + inputHidden.value + "/" + window.location.href)

    //Saída formatada
    console.log("SF :" + inputHidden.value + "/" + window.location.href.slice(22))

}*/

btn.addEventListener('click', function() {

    //receber dados
    getUrl.innerText = localStorage.getItem('Back_URL')
    inputHidden.value = localStorage.getItem('Back_URL')

    // Enviar dados
    console.log('Nome: ' + nome.value)
    console.log('Email: ' + email.value)
    console.log('Destino: ' + inputHidden.value + "/" + window.location.href.slice(22, 32))
})