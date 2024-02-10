import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";

export const metadata = {
    title: 'Favoritos',
    description: 'Pero hay muchos más'
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

        <span className="text-2xl m-2">Pokémons favoritos <small className="text-blue-600">Global State</small></span>
      
        <FavoritePokemons />

    </div>
  );
}

