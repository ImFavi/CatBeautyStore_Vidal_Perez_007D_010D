function enviarEvaluacion(){
    let nombre=document.getElementById('nombre').value;
    let nombrep=document.getElementById('nombrep').value;
    let calificacion = document.querySelector('input[name="calificacion"]:checked');
    let comentario=document.getElementById('comentario').value;


    if(nombre.length< 3){
        alert('El nombre debe tener al menos 3 caracteres');

    }else{
        if(nombrep < 5){
            alert('No tenemos ningun articulo con ese nomnre');
        }
        else{
            if(!calificacion){
                alert('Debe calificar');
            }else{
                if(comentario==''){
                    alert('Debe escribir un comentario');
                }
            }
        }
    }


    alert ('se ha enviado tu evaluacion');

}