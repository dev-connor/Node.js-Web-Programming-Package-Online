// @ts-check

const { ApolloServer, gql } = require('apollo-server')
const {sequelize, User, City} = require('./sequelize')

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        age: Int!
        city: City
    }
    
    type City {
        id: Int!
        name: String!
    }

    type Query {
        users: [User]
    }
`

/**
 * @type {import('apollo-server').IResolvers}
 */
const resolvers = {
    Query: {
      users: async () => User.findAll()
    },
  }
  
  const server = new ApolloServer({ typeDefs, resolvers })
  
  server.listen(5000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })