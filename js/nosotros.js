function mostrarMarcas(){
    let url = "http://localhost:3300/Marcas";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let texto = "";

            data.forEach(marca => {
                texto += `
                    <div class="col-md-6" style="margin: 20px 0;">
                        <div class="card">
                            <img class="card-img-top" src="${marca.logo}">
                            <div class="card-body">
                                <h5 class="card-title">${marca.marca}</h5>
                            </div>
                        </div>
                    </div>`;
            });

            document.getElementById('marcas').innerHTML = texto;
        })
        .catch(error => console.log(error));
}