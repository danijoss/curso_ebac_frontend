
let numeroA = document.getElementById("numero-A")
let numeroB = document.getElementById("numero-B")
const form = document.getElementById("formulario");

mensagem = document.querySelector("message");

form.addEventListener('submit', function(e){
        e.preventDefault();
        document.querySelector(".error-message").style.display = 'none';
        document.querySelector(".success-message").style.display = 'none';
    if (numeroA.value >= numeroB.value){
        document.querySelector(".error-message").style.display = 'block';
    }else {
        document.querySelector(".success-message").style.display = 'block';
    }
})