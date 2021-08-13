//form components
var nome = document.getElementById('txtNome')
var email = document.getElementById('txtEmail')
var btn = document.getElementById('enviar')
var inputHidden = document.getElementById('hidden')

var myUrl = window.location.href
var splitOne

btn.addEventListener('click', function() {

    if (nome.value == "" || email.value == "") {
        alert('Preencha todos os campos')
    } else {

        //receber dados
        inputHidden.value = localStorage.getItem("myUrl")

        // Enviar dados
        console.log('Nome: ' + nome.value)
        console.log('Email: ' + email.value)
        splitOne = myUrl.split("?var=")
        console.log('Trajetória do Lead: ' + splitOne[1].substring(8) + " / " + splitOne[0].substring(8))
        inputHidden.value = 'Trajetória do Lead: ' + splitOne[1].substring(8) + " / " + splitOne[0].substring(8)
        console.log(inputHidden.value)

        //limpar campos
        nome.value = ""
        email.value = ""
    }

})