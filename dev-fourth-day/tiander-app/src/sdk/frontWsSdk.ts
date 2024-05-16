import { config } from "./config";
import { ApolloError } from "@apollo/client/errors";
import { getWsSdk, WsSdk } from "@lbucior/tiander-sdk/ws";

// const STATUS_BAD_REQUEST = 400;
// const STATUS_UNAUTHORIZED = 401;

export const frontWsSdk = (wsToken: string): WsSdk =>
  getWsSdk(
    config.graphqlWsEndpoint,
    (apolloError: ApolloError) => {
      const { graphQLErrors, networkError } = apolloError;

      if (graphQLErrors) {
        //
      }
      if (networkError) {
        //
      }
    },
    wsToken
  );
