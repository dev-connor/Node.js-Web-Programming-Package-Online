// @ts-check

const { MongoClient} = require('mongodb')

const uri = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.vrgvebb.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})

module.exports = client