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

program.command('list').action(async () => {
    const client = await connect()

    const query = `SELECT * FROM users`
    const result = await client.query(query)
    console.log(result.rows)
})

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
    const userName = await prompts({
        type: 'text',
        name: 'userName',
        message: 'Provide a user name to delete.',
    })

    const query = `DELETE FROM users WHERE name = '${userName.userName}'`
    console.log(query)
    await client.query(query)
    
    await client.end()
})

program.parseAsync()



