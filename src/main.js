// @ts-check

const { createPrivateKey } = require('crypto')
const { Sequelize, DataTypes } = require('sequelize')
const { Z_DEFAULT_STRATEGY } = require('zlib')

async function main() {
    const sequelize = new Sequelize({
        database: 'fc21',
        username: 'myuser',
        password: 'mypass',
        dialect: 'postgres',
        host: 'localhost',
    })

    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
    )
    
    await sequelize.sync({
        alter: true,
    })
    
    await sequelize.authenticate()
    await sequelize.close()

}

main()

