import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

/*
  {
    favorites: {
      '1': { id: 1, name: 'bulbasaur' },
      '2': { id: 143, name: 'snorlax' }
    }
  }
*/

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsState => {

//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');

//   return favorites;
// } 

const initialState: PokemonsState = {
  favorites: {},
    // ...getInitialState(),
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        
        const pokemon = action.payload;
        const { id } = pokemon;

        if (state.favorites[id] !== undefined) {
            delete state.favorites[id];
            // return;
        } else {
          state.favorites[id] = pokemon;
        }

        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }

  }
});

export const {setFavoritePokemons, toggleFavorite} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;