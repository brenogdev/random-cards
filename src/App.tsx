import React from "react";
import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import { client } from "./graphql";
import { AppRoutes } from "./routes";

export const App: React.FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <AppRoutes />
    </ApolloProvider>
  );
};
