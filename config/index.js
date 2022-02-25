const dotenv = require('dotenv').config(); // .env에 세팅한 설정을 사용하기 위해

const config = {
    dbPool: {
        connectionLimit: process.env.MYSQL_LIMIT,
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB
    }
}

module.exports = config;