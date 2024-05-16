import React from "react";
import { ApolloProvider } from "@apollo/react-components";
import hoistNonReactStatic from "hoist-non-react-statics";
import { frontWsSdk } from "./frontWsSdk";
import {
  ApolloClient,
  ApolloProvider as NewApolloProvider,
} from "@apollo/client";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../store/baseTypes";

// On the client we store the sdk client in the following variable
// this prevents the client from reinitializing between page transitions.
let globalWsSdkClient: ApolloClient<any>;

const initWsSdkClient = (idToken: string) => {
  // Reuse client on the client-side
  if (!globalWsSdkClient) {
    globalWsSdkClient = frontWsSdk(`Bearer ${idToken}`);
  }

  return globalWsSdkClient;
};

/**
 * @name withWsSdk
 */
const withWsSdk = () => (PageComponent: React.ComponentProps<any>) => {
  const WithWsSdk = (pageProps: any) => {
    const { idToken } = useSelector(
      ({ auth }: RootState) => ({
        idToken: auth.idToken,
      }),
      shallowEqual
    );

    const wsClient = initWsSdkClient(idToken!);

    return (
      <ApolloProvider client={wsClient}>
        <NewApolloProvider client={wsClient}>
          <PageComponent {...pageProps} />
        </NewApolloProvider>
      </ApolloProvider>
    );
  };

  hoistNonReactStatic(WithWsSdk, PageComponent);

  return WithWsSdk;
};

export default withWsSdk;
