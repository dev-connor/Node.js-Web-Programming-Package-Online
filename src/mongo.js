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
    const cities = client.db('fc21').collection('cities')
    
    // Reset
    await users.deleteMany({})
    await cities.deleteMany({})

    // Init
    await cities.insertMany([
        {
            name: '서울',
            population: 1000,
        },
        {
            name: '부산',
            population: 350,
        },
    ])

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
            city: '서울'
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
            city: '부산'
        },
        {
            name: 'Baz',
            birthYear: 1990,
            city: '부산'
        },
        {
            name: 'Poo',
            birthYear: 1993,
            city: '서울'
        },
    ])



    const cursor = users.aggregate([
        {
            $lookup: {
                from: 'cities',
                localField: 'city', 
                foreignField: 'name', 
                as: 'city_info',
            },
        },
        {
            $match: {
                $and: [
                    {
                        'city_info.population': {
                            $gte: 500,
                        },
                    },
                    {
                        birthYear: {
                            $gte: 1995,
                        },
                    },
                ]
            }
        }
    ])
    
    
    users.find({
            'contacts.type': 'phone'
    })

    await cursor.forEach(console.log)

    await client.close()
}

main()