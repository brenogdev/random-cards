import React, { useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import { MediaCard } from "../../components/MediaCard";
import { GET_POKEMONS } from "../../graphql/queries/getPokemons";
import { PokemonProps } from "../../@types/pokemons.types";
import * as Styled from "./styles";

const Home: React.FunctionComponent = () => {
  const { name } = useParams();
  const [limit, setLimit] = useState(5);
  const [result, setResult] = useState<PokemonProps[]>([]);
  const [flippy, setFlippy] = useState(false);

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

  function getItemsToShuffle(array: PokemonProps[]) {
    let ctr = array.length,
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
    setFlippy(true);
    const changes = getItemsToShuffle([...result]);
    setResult(changes);
  }

  const newResult = result.map((item) => {
    return {
      image: item.image,
      name: item.name,
      points: Math.floor(Math.random() * 10)
    };
  });

  return (
    <Styled.Container>
      <Box display="flex" justifyContent="flex-end">
        <Typography variant="body1" fontSize={40} textAlign="center">
          Seja bem vindo(a):
        </Typography>
        <Typography
          variant="subtitle2"
          fontSize={40}
          textAlign="center"
          fontWeight="bold"
        >
          {name}
        </Typography>
      </Box>
      <Styled.Actions>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleShuffle}
          sx={{ textTransform: "capitalize" }}
        >
          Embaralhar
        </Button>
        <Button
          variant="outlined"
          color="success"
          onClick={() => getMoreCard()}
          disabled={limit === 8}
          sx={{ textTransform: "capitalize" }}
        >
          Nova carta
        </Button>
      </Styled.Actions>
      <Styled.Content>
        {loading ? (
          <CircularProgress color="success" />
        ) : (
          <>
            {newResult.map((pokemon: any) => (
              <Flippy key={pokemon.name} isFlipped={flippy}>
                <FrontSide>
                  <MediaCard
                    randomNumber={pokemon.points}
                    image={pokemon.image}
                    title={pokemon.name}
                    alt={pokemon.name}
                  />
                </FrontSide>
                <BackSide style={{ backgroundColor: "#175852" }} />
              </Flippy>
            ))}
          </>
        )}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Home;
