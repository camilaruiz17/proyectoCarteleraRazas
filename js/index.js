const requestURL = '../json/razas.json';
async function fetchRazasJson() {
    const response = await fetch(requestURL);
    const razas = await response.json();
    return razas;
}

fetchRazasJson().then(response => {

  for (let index = 0; index<response.razas.length; index++) {
      const razasSection = document.getElementById ("razasSection");

      let name = response.razas[index].titulo;
      let image = response.razas[index].caratula;
      let size = response.razas[index].tamanio;
      let description= response.razas[index].descripcion;

      razasSection.innerHTML += `
      <div class="col">
        <div class="card shadow">
          <img src="${image}" class="imageCard" alt="Image of dogs">
            <div class="card-body"> 
              <p class="name">${name}</p>
              <p class="size">${size}</p>
                <div id="description">
                  <p class="descriptionTitle"><strong>Descripción:</strong> ${description}</p>
                </div>
            </div>
        </div>
    </div>
`
  }; 

})