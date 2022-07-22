import React, { useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { MediaCard } from "../../components/MediaCard";
import { GET_POKEMONS } from "../../graphql/queries/getPokemons";
import * as Styled from "./styles";

type PokemonProps = {
  image: string;
  name: string;
  url: string;
};

const Home: React.FunctionComponent = () => {
  const { name } = useParams();
  const [limit, setLimit] = useState(5);
  const [result, setResult] = useState<PokemonProps[]>([]);

  const points = Math.floor(Math.random() * 10);

  const gqlVariables = {
    limit,
    offset: 0,
  };

  const { loading, fetchMore } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
    onCompleted: (result) => {
      setResult(result.pokemons.results);
    },
  });

  const getMoreCard = async () => {
    const currentLength = result.length;
    const fetchMoreResult = await fetchMore({
      variables: {
        offset: currentLength,
        limit: 1,
      },
    });
    setLimit(currentLength + fetchMoreResult.data.pokemons.results.length);
  };

  function shuffle(array: PokemonProps[]) {
    var ctr = array.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = array[ctr];
      array[ctr] = array[index];
      array[index] = temp;
    }
    return array;
  }

  function handleShuffle() {
    const changes = shuffle([...result]);
    setResult(changes);
  }

  return (
    <Styled.Container>
      <Typography variant="body1" fontSize={40} textAlign="center">
        Seja bem vindo(a)
      </Typography>
      <Typography
        variant="subtitle2"
        fontSize={40}
        textAlign="center"
        fontWeight="bold"
      >
        {name}
      </Typography>
      <Styled.Actions>
        <Button variant="outlined" color="primary" onClick={handleShuffle}>
          Embaralhar
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={() => getMoreCard()}
          disabled={limit === 8}
        >
          Nova carta
        </Button>
      </Styled.Actions>
      <Styled.Content>
        {loading ? (
          <CircularProgress color="success" />
        ) : (
          <>
            {result &&
              result.map((pokemon: PokemonProps) => (
                <Box key={pokemon.name}>
                  <MediaCard
                    randomNumber={points}
                    image={pokemon.image}
                    title={pokemon.name}
                    alt={pokemon.name}
                  />
                </Box>
              ))}
          </>
        )}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Home;
