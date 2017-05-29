const path = require('path');

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: path.join(__dirname, '../db', 'dev.sqlite3')
        },
        migrations: {
            directory: path.join(__dirname, '../migrations'),
            tableName: 'migrations'
        }
    },

    test: {
        client: 'sqlite3',
        connection: {
            filename: path.join(__dirname, '../db', 'test.sqlite3')
        },
        migrations: {
            directory: path.join(__dirname, '../migrations'),
            tableName: 'migrations'
        }
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: path.join(__dirname, '../migrations'),
            tableName: 'migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: path.join(__dirname, '../migrations'),
            tableName: 'migrations'
        }
    }
};
