function resultado() {
    let p1, p2, p3, p4, p5, p6, p7, p8, cont;

    // Pregunta 1
    p1 = document.getElementById('r1').checked ? 1 : 0;

    // Pregunta 2
    p2 = document.getElementById('r3').checked ? 1 : 0;

    // Pregunta 3
    p3 = document.getElementById('r6').checked ? 1 : 0;

    // Pregunta 4
    p4 = document.getElementById('r7').checked ? 1 : 0;

    // Pregunta 5
    p5 = document.getElementById('r9').checked ? 1 : 0;
    
    // Pregunta 6
    p6 = document.getElementById('r11').checked ? 1 : 0;

    // Pregunta 7
    p7 = document.getElementById('r13').checked ? 1 : 0;

    // Pregunta 8
    p8 = document.getElementById('r16').checked ? 1 : 0;
    
    cont = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8;
    
    if (cont >= 5) {
        alert("¡Bien hecho! Acertaste: " + cont + ".\nTu código de descuento es 'CBS2024'.");
    } else if (cont > 0) {
        alert("Lamentablemente no acertaste la cantidad de preguntas esperada :C");
    } else {
        alert("No has respondido ninguna pregunta.");
    }

    window.location.href = "../index.html";
}
