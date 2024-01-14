export const BASEURL = 'https://pokeapi.co/api/v2/pokemon?limit=10'
export const BASEURL2 = 'https://pokeapi.co/api/v2/pokemon'


export const traeDatos = async(url, nombre) => {
    try{
        const respuesta = await axios.get(`${url}/${nombre}`)
        return respuesta.data
    }catch(e){
        alert("The Pokémon that you searched doesn't exist")
        console.log("error: ", e.message)
    }
}

export const traeDatosLimitados = async (url) => {
    try {
        const respuesta = await axios.get(url)
        return respuesta.data.results
    } catch (error) {
        console.log(error)
    }   
}