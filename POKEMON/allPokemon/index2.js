import {
    traeDatos, BASEURL, BASEURL2, traeDatosLimitados
} from '../crudPokemon.js'


const contenedor = document.getElementById("container")
const contenedorCaracteristicas = document.getElementById("caracteristicas")

//que aparezcan 10
document.addEventListener("DOMContentLoaded", async(e) => {
    try{
       const resp = await traeDatosLimitados(BASEURL)
        resp.forEach(pokemon => {
            const elemento = document.createElement("div")
            elemento.innerHTML = `<p style="cursor:pointer;" id="${pokemon.name}">${pokemon.name}</p>`
            contenedor.append(elemento)
        })

    }catch(e){
        console.log("error", e);
    }
})


//hacer click sobre el elemento
document.addEventListener("click", async (e) => {
    try {
        contenedorCaracteristicas.innerHTML = ``
        const resp = await traeDatos(BASEURL2, e.target.id)
     
        const elemento = document.createElement("p")
        elemento.innerHTML = `<p>Name: ${resp.name}</p>
        <p>Weight: ${resp.weight}</p>
        <p>Height: ${resp.height}</p>
        <p>Experience: ${resp.base_experience}</p>
   
        <img src=${resp.sprites.front_default}>`

        contenedorCaracteristicas.append(elemento)

    } catch (error) {
        console.log(error);
    }
})

