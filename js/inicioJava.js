function abrirModal() {
    document.getElementById('ventanaModal').style.display = 'block';
}
  
function cerrarModal(){
    document.getElementById('ventanaModal').style.display = 'none';
}  

window.onclick = function(event){
    var modal = document.getElementById('ventanaModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}