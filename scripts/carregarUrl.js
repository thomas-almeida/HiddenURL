var inputHidden = document.getElementById('hidden')

//form components
var nome = document.getElementById('txtNome')
var email = document.getElementById('txtEmail')
var btn = document.getElementById('enviar')

btn.addEventListener('click', function() {

    if (nome.value == "" || email.value == "") {
        alert('Preencha todos os campos')
    } else {

        //receber dados
        inputHidden.value = localStorage.getItem('Back_URL')

        // Enviar dados
        console.log('Nome: ' + nome.value)
        console.log('Email: ' + email.value)
        console.log('Destino: ' + inputHidden.value + "/" + window.location.href.slice(22, 32))

        alert('Os resultados apareceram no console 😎')

        //limpar campos
        nome.value = ""
        email.value = ""
    }


})