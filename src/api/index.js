import axios from 'axios';

export const getPokemon = async () => {
	try {
		const { data } = await axios.get(
			'https://pokeapi.co/api/v2/pokemon?limit=151'
		);
		return data.results;
	} catch (error) {
		console.error('There was an error: ', error);
	}
};

export const  getPokemonDetails = async (pokemon) => {
	try {
		const { data } = await axios.get(pokemon.url)	
		return data
	} catch (error) {
		console.error('There was an error: ', error)
	}
}
