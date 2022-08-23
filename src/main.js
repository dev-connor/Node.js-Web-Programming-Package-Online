// @ts-check

const { Sequelize } = require('sequelize')

async function main() {
    const sequelize = new Sequelize({
        database: 'fc21',
        username: 'myuser',
        password: 'mypass',
        dialect: 'postgres',
        host: 'localhost',
    })

    await sequelize.authenticate()
    await sequelize.close()

}

main()

