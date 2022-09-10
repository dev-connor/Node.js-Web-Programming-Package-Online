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
  
  
  async function main() {
    await sequelize.sync({ force: true })

    const seoul = await City.build({
        name: 'Seoul'
    }).save()


    await User.build({
        age: 26,
        name: 'Coco',
        cityId: seoul.getDataValue('id'),
    }).save()

    await User.build({
        age: 30,
        name: 'Eoeo',
    }).save()

    
    const server = new ApolloServer({ typeDefs, resolvers })

    server.listen(5000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    })
  }

  main()
  