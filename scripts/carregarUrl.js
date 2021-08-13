var getUrl = document.getElementById('getUrl')
var inputHidden = document.getElementById('hidden')

//form
var nome = document.getElementById('txtNome')
var email = document.getElementById('txtEmail')
var btn = document.getElementById('enviar')

btn.addEventListener('click', function() {

    //receber dados
    inputHidden.value = localStorage.getItem('Back_URL')

    // Enviar dados
    console.log('Nome: ' + nome.value)
    console.log('Email: ' + email.value)
    console.log('Destino: ' + inputHidden.value + "/" + window.location.href.slice(22, 32))
})