import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const development = true;

const httpLink = new HttpLink({
  uri: development ? 'http://localhost:3000/api/graphql' : 'https://cdcd-keystone.herokuapp.com/api/graphql',
  // uri: 'https://cdcd-keystone.herokuapp.com/api/graphql',
  credentials: 'include',
});

export const client = new ApolloClient({
  link: httpLink,
  // uri: 'https://cdcd-server.creativedistillery.com',
  cache: new InMemoryCache(),
});
