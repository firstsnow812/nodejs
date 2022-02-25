'use strict';

const config = require('./config');
const mysql = require('mysql');


exports.test = async (req, res) => {
    const dbConn = mysql.createPool(config.dbPool);

    return new Promise(function(resolve, reject) {
        const sql = 'SELECT * FROM bbb LIMIT 1';
        // const params = [ parseInt(limitStart), parseInt(limit) ];
        dbConn.query(sql, function (err, rows) {
            if (err) { dbConn.end(); return reject(err); }
            dbConn.end();
            resolve(rows); 
        });
    });
};