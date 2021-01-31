import { config } from 'dotenv'
import { ApolloServer } from 'apollo-server'
import { helloDefs, helloResolver } from './graphql-resources/hello-world'
import { userDefs, userResolver } from './graphql-resources/user'
import db from './db/models'

config()

const resolvers = {
  Query: {
    ...userResolver.Query,
    ...helloResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation
  }
}
const server = new ApolloServer({
  typeDefs: [helloDefs, userDefs],
  resolvers,
  context: async ({ req }) => {
    return {
      req,
      databaseConnection: db
    }
  }
})

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`server running on ${url}`)
})
