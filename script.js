document.getElementById("botao").addEventListener("click", validaFormulario) 
//criação de evento = deQuemViraOEvento.ouvidorDeEventos("o evento", o que deve fazer)

function validaFormulario(){
    if(document.getElementById("nome").value != "" && 
       document.getElementById("email").value != "" &&
       document.getElementById("fone").value != ""){
        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome e email!")
    }

}

