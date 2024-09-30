import { useState, useEffect } from "react";
import { Heading, Spinner, Container } from "@chakra-ui/react";
import { PokemonList } from "./components/PokemonList";
import { Pagination } from "./components/Pagination";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  //Acá debes crear tu logica para traer los pokemones

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" textAlign="center" mb={6}>
        Pokémon Cards
      </Heading>
      {loading ? (
        <Spinner
          size="xl"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
        />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
};

export default App;
