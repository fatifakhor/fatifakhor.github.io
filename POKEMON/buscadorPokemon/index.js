import {
    traeDatos, BASEURL2
} from '../crudPokemon.js'


const contenedor = document.getElementById("container")
const poke = document.getElementById("texto")
const buscar = document.getElementById("busca")
 

buscar.addEventListener("click", async(e) => {
 
    try{
        contenedor.innerHTML = ``
        const buscandoMensaje = document.createElement("div")
        buscandoMensaje.innerHTML = 
        `<img class="imagenBusqueda" 
        src="https://2.bp.blogspot.com/-pK3tCSLHy5E/VQxlc7qnkZI/AAAAAAAAADY/S-Zt4FQTSMU/s1600/giphy.gif">`
        document.body.append(buscandoMensaje)
        
        const pokemonABuscar = poke.value
        const resp = await traeDatos(BASEURL2, pokemonABuscar)
        console.log(resp)

        setTimeout(() => {
            buscandoMensaje.remove()

            const elemento = document.createElement("div")
            elemento.innerHTML = `<div class="resultado"> 
            <p>Name: ${resp.name}</p>
            <p>Weight: ${resp.weight}</p>
            <p>Height: ${resp.height}</p>
            <p>Experience: ${resp.base_experience}</p>
            <img src=${resp.sprites.front_default}>
            </div>`
        
            contenedor.innerHTML=""
            contenedor.append(elemento)
        }, 4000)

    }catch(e){
       
        console.log("error al obtener datos", e.message);
    }
})