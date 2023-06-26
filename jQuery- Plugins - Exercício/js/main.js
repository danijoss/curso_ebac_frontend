$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000-000-000-00')
    $('#cep').mask('00000-000')


    });

    $('form').validate({
        
        rules: {
            
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome completo',
            telefone: 'Por favor insira o seu telefone',
            email: 'Por favor insira seu email',
            cpf: 'Por favor insira o seu CPF',
            endereco: 'Por favor insira o seu Endereço',
            cep: 'Por favor insira seu CEP' 
        },

        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
        
})

//valida nome e endereço completo:

$("#btn").click(function(e) {
    if (/\w+\s+\w+/.test($("#nome").val())) {
        
    } else {
        alert("O nome deve ser completo");
    }

    e.preventDefault();
});

$("#btn").click(function(e) {
    if (/\w+\s+\w+/.test($("#endereco").val())) {
        
    } else {
        alert("O endereço deve ser completo");
    }

    e.preventDefault();
});
