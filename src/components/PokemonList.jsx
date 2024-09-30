import React, { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({ pokemons }) => {
  const [detailedPokemons, setDetailedPokemons] = useState([]);

  useEffect(() => {
   // Acá debes terminar la logica para hacer la petición de los detalles por cada pokémon.
  }, [pokemons]);

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
      {detailedPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </SimpleGrid>
  );
};
