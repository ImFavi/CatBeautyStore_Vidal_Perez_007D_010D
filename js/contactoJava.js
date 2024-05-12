function Enviar(){

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('mail').value;
    let fono = document.getElementById('fono').value;
    let sexo = document.getElementById('sexo').value;
    let textarea = document.getElementById('textarea').value;

    let validacion = true;

    if (nombre.length < 3){
        alert('El nombre completo debe tener al menos 3 caracteres');
        validacion = false;
    } else if (correo === ''){
        alert('El campo de correo electrónico no puede estar vacío');
        validacion = false;
    } else if (!validateEmail(correo)){
        alert('Formato de correo electrónico no válido');
        validacion = false;
    } else if (isNaN(parseInt(fono)) || fono.length != 9){
        alert('El campo de "Celular" debe tener 9 dígitos numéricos');
        validacion = false;
    } else if (sexo !== '1' && sexo !== '2'){
        alert('Debe seleccionar su género');
        validacion = false;
    } else if (textarea === ''){
        alert('Debe ingresar un comentario o opinion');
        validacion = false;
    }

    if (validacion){
        alert('¡Gracias por enviar su información!');
        LimpiarCampos();
    }

    return validacion;
}

function LimpiarCampos() {
    document.getElementById('nombre').value = '';
    document.getElementById('textarea').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('fono').value = '';
    document.getElementById('sexo').value = '';
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

$(document).ready(function() {
    $("#datos").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 10
            },
            mail: {
                required: true,
                email: true
            },
            textarea: {
                required: true
            }

        },
        messages: {
            nombre: {
                required: 'Ingrese su nombre completo',
                minlength: 'Caracteres insuficientes'
            },
            mail: {
                required: 'Ingrese su correo',
                email: 'Formato de correo no válido'
            },
            textarea: {
                required: 'Ingrese su comentario'
            }

        }
    });
});


function mostrarPreguntas(){
    let url = "https://jsonplaceholder.typicode.com/posts"

    fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ""
        for (var i = 0; i < data.length && i < 10; i++)
            {
                body += 
                `
                <h1>${data[i].id}</h1>
                <p>${data[i].title}</p>
                <p>${data[i].body}</p>
                `
            }
            document.getElementById('Preguntas').innerHTML = body
    }
}