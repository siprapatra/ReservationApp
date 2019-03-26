import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from "node-fetch";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:
      "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev",
    fetch
  })
});
export default client;
