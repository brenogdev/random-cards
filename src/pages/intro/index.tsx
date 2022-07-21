import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

type IntroFormProps = {
  name: string;
};

const Intro: React.FunctionComponent = () => {
  const { register, handleSubmit } = useForm<IntroFormProps>({
    defaultValues: {
      name: "",
    },
  });

  const navigate = useNavigate();

  const handlerFormSubmit = (data: IntroFormProps) => {
    navigate(`/home/${data.name}`);
  };
  return (
    <Styled.Container>
      <form onSubmit={handleSubmit(handlerFormSubmit)}>
        <Styled.Content>
          <TextField
            {...register("name")}
            id="name"
            label="Digite seu nome"
            variant="outlined"
            fullWidth
          />
          <Button variant="outlined" size="large" type="submit">
            Ver cartas
          </Button>
        </Styled.Content>
      </form>
    </Styled.Container>
  );
};

export default Intro;
