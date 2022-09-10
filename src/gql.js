// @ts-check

const { ApolloServer, gql } = require('apollo-server')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books(search: String): [Book]
  }
  type Mutation {
    addBook(title: String!, author: String!): Book
    }

`

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
    {
      title: 'Mastering NodeJS',
      author: 'JH',
    },
    {
      title: 'Mastering JS',
      author: 'HJ',
    },
  ]

  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
/**
 * @type {import('apollo-server').IResolvers}
 */
const resolvers = {
    Query: {
      books: (_, {search}) => 
      search ? books.filter(({title}) => title.includes(search)) : books,
    },
    Mutation: {
        addBook: (_, {title, author}) => {
            const newBook = {
                title, 
                author,
            }
            books.push(newBook)
            return newBook
        },
    },
  }
  
//   const {
//     ApolloServerPluginLandingPageLocalDefault
//   } = require('apollo-server-core')
  
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // csrfPrevention: true,
    // cache: 'bounded',
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
    **/
    // plugins: [
    //   ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    // ],
  })
  

  // The `listen` method launches a web server.
  server.listen(5000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })