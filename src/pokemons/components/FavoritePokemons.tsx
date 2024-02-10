'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useEffect, useState } from "react";

export const FavoritePokemons = () => {

  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));
  // const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
    
  //   setPokemons(favoritePokemons);

  // }, [favoritePokemons])
  

  return (

        // <PokemonGrid pokemons={favoritePokemons} />
    <>
      {
        favoritePokemons.length > 0
          ? (<PokemonGrid pokemons={favoritePokemons} />)
          : (<NoFavorites />)
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50] items-center justify-center">
      <span>No hay favoritos</span>
    </div>
  )
}
