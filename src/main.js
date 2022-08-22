// @ts-check

const { Client } = require('pg')
const program = require('commander')
const prompts = require('prompts')

async function connect() {
    const client = new Client({
        user: 'myuser',
        password: 'mypass',
        database: 'fc21',
    })
    await client.connect()
    return client
}

program.command('add').action(async () => {
    const client = await connect()
    const userName = await prompts({
        type: 'text',
        name: 'userName',
        message: 'Provide a user name to insert.',
    })

    const query = `INSERT INTO users (name) VALUES ('${userName.userName}')`
    await client.query(query)
    
    await client.end()
})

program
.command('remove')
.action(async () => {
    const client = await connect()
    await client.end()
})

program.parseAsync()



