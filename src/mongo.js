// @ts-check

const { MongoClient } = require('mongodb')

const uri = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.vrgvebb.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})

async function main() {
    const c = await client.connect()

    const users = client.db('fc21').collection('users')
    
    await users.deleteMany({})
    await users.insertMany([
        {
            name: 'Foo',
            birthYear: 2000,
            contacts: [
                {
                    type: 'phone', 
                    number: '+821000001111'
                },
                {
                    type: 'home', 
                    number: '+82023334444'
                },
            ],
            city: {
                name: '서울',
                population: 1000,
            },
        },
        {
            name: 'Bar',
            birthYear: 1995,
            contacts: [
                {
                    type: 'phone', 
                    number: '+821000001111'
                },
            ],
            city: {
                name: '부산',
                population: 350,
            },
        },
        {
            name: 'Baz',
            birthYear: 1990,
            city: {
                name: '부산',
                population: 350,
            },
        },
        {
            name: 'Poo',
            birthYear: 1993,
            city: {
                name: '부산',
                population: 350,
            },
        },
    ])


    const cursor = users.find({
            'contacts.type': 'phone'
    })

    await cursor.forEach(console.log)

    await client.close()
}

main()