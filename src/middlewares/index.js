export const logger = (store) => (next) => (action) => {
    //tenemos que pasar el action a next para que pase al store
    next (action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    // creamos una constante con toda la informacion de los pokemons.
    const featured = [{name: 'davitsito'}, ...actionInfo.action.payload]
    // creamos una informacion actualizada como copia de actionInfo.
    const updatedActionInfo = {
        ...actionInfo,
        // hacemos una copiade actions y dentro de payload añadimos la lista modificada. 
        action: {...actionInfo.action, payload: featured}
    }
    next ( updatedActionInfo)
}
