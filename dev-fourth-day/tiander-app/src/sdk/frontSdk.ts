import { config } from "./config";
import { ApolloError } from "@apollo/client/errors";
import { getHttpSdk, HttpSdk } from "@lbucior/tiander-sdk/http";

const STATUS_BAD_REQUEST = 400;
const STATUS_UNAUTHORIZED = 401;

export const frontSdk: HttpSdk = getHttpSdk(
  config.graphqlEndpoint,
  (apolloError: ApolloError) => {
    const { graphQLErrors, networkError } = apolloError;

    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }: any) => {
        if (message === "Forbidden") {
          localStorage.clear();
          sessionStorage.clear();
          window.location.reload();
        }
      });
    }

    if (networkError) {
      console.error(
        `Unable to access the GraphQL API. Is it running and accessible at ${config.graphqlEndpoint} from the server?`,
      );
    }
  },
);
