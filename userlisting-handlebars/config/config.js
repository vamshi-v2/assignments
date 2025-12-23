require('dotenv').config();

module.exports = {
    "development": {
        "username": process.env.P_USER,
        "password": process.env.P_PASSWORD,
        "database": process.env.P_DATABASE,
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": process.env.P_USER,
        "password": process.env.P_PASSWORD,
        "database": process.env.P_DATABASE,
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": process.env.P_USER,
        "password": process.env.P_PASSWORD,
        "database": process.env.P_DATABASE,
        "host": "127.0.0.1",
        "dialect": "postgres"
    }
} 
