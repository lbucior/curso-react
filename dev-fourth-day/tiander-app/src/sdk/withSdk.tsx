import React from "react";
import { ApolloProvider } from "@apollo/react-components";
import hoistNonReactStatic from "hoist-non-react-statics";
import {
  ApolloClient,
  ApolloProvider as NewApolloProvider,
} from "@apollo/client";
import { frontSdk } from "./frontSdk";

// On the client we store the sdk client in the following variable
// this prevents the client from reinitializing between page transitions.
let globalSdkClient: ApolloClient<any>;

const initSdkClient = () => {
  // Reuse client on the client-side
  if (!globalSdkClient) {
    globalSdkClient = frontSdk;
  }

  return globalSdkClient;
};

/**
 * @name withSdk
 */
const withSdk = () => (PageComponent: React.ComponentProps<any>) => {
  const WithSdk = ({ ...pageProps }) => {
    const client = initSdkClient();

    return (
      <ApolloProvider client={client}>
        <NewApolloProvider client={client}>
          <PageComponent {...pageProps} />
        </NewApolloProvider>
      </ApolloProvider>
    );
  };

  hoistNonReactStatic(WithSdk, PageComponent);

  return WithSdk;
};

export default withSdk;
