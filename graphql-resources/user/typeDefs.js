import { gql } from 'apollo-server'

export const typeDefs = gql`

    type User {
        id: Int!
        firstName: String!
        lastName: String!
        age: Int!
        createdAt: String!
        updatedAt: String!
    }

    input UserInput {
        firstName: String!
        lastName: String!
        age: Int!
    }
    
    type Query {
        Users(id: Int): [User]
    }

    type Mutation {
        User(input: UserInput!): User
    }
`
