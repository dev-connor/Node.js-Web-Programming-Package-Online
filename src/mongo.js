// @ts-check

const { MongoClient, ServerApiVersion } = require('mongodb')

const uri = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.vrgvebb.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    // serverApi: ServerApiVersion.v1 
})

async function main() {
    const c = await client.connect()
    console.log(c)
    console.log('OK!')

    client.close()
}

main()

// client.connect(err => {
//   const collection = client.db("test").collection("devices")
//   // perform actions on the collection object
//   client.close()
// })