import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://sivcrl3y.api.sanity.io/v1/graphql/production/default",
    cache: new InMemoryCache(),
});

export default client;