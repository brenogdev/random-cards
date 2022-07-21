import React from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import * as Styled from "./styles";

const Home: React.FunctionComponent = () => {
  const { name } = useParams();

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
      <Styled.Content>
        
      </Styled.Content>
    </Styled.Container>
  );
};

export default Home;
