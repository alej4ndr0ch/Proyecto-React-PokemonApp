import { BuscarPokemon } from "./BuscarPokemon"
import { ContenedorPokemon } from "./ContenedorPokemones"
import { usePokemon } from "../hooks/usePokemon"
 
export const PokemonApp = () => {
 
    const { handleGetPokemon, pokemon } = usePokemon()
 
    return (
        <>
            <BuscarPokemon handleGetPokemon={handleGetPokemon} />
            <ContenedorPokemon pokemon={pokemon} />
        </>
    )
}