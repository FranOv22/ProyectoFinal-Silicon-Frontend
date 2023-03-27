const listamonstruos = document.querySelector("#listmonstruos");


let URL = "https://mhw-db.com/monsters/";

for (let i = 1; i <= 58; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarMonstruo(data))
        
}

function mostrarMonstruo(mon){
    
    const div = document.createElement("div");
    div.classList.add("monstruos");
    div.innerHTML = `
    <p class="numMonstruo">${mon.id}</p>
    <div class="monImagen">
        <img src="assets/${mon.name}.png" alt="${mon.name}">
    </div>
    <div class="monInfo">
        <div class="nombreContenedor">
            <h2 class="monNombre"><b class="monTag">Name:</b>${mon.name}</h2>
            <p class="monEspecie"><b class="monTag">Species:</b>${mon.species}</p>
            <p class="monSize"><b class="monTag">Size:</b>${mon.type}</p>
            <p class="monDesc"><b class="monTag">Description:</b>${mon.description}</p>
        </div>
    </div>
    `;
    listamonstruos.append(div);
}
