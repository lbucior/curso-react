const stage = process.env.STAGE as string;
const graphqlEndpoint = "https://dev.sdk.wolvez.com.br/graphql";
const graphqlWsEndpoint = "wss://realtime-dev.sdk.wolvez.com.br";

// const graphqlEndpoint = "http://localhost:4000/graphql";
// const graphqlWsEndpoint = "ws://localhost:4000";

export const config = {
  stage,
  graphqlEndpoint,
  graphqlWsEndpoint,
};

export type Config = typeof config;
