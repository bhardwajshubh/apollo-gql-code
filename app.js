import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server'
import { helloDefs, helloResolver } from './graphql-resources/hello-world'
dotenv.config()

const resolvers = {
  Query: {
    ...helloResolver.Query
  }
}

const server = new ApolloServer({
  typeDefs: [helloDefs],
  resolvers
})

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`server running on ${url}`)
})
