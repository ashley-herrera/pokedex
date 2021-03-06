import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";


class PokedexService {

    constructor(){
        this.getPokemon()
    }

    async getPokemon(){
        try {
            const res = await pokeApi.get("")
            ProxyState.pokedex = res.data.results
        } catch (error) {
            console.error(error)
        }
    }

     async setActivePokemon(name){
         try {
             const res = await pokeApi.get(name)
             ProxyState.activePokemon = new Pokemon(res.data)
         } catch (error) {
            console.error(error)
         }
    }
}

export const pokedexService = new PokedexService()