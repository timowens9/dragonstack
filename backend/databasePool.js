const { Pool} = require('pg');

const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;








/* Testing purposes
pool.query('SELECT * FROM generation', (error, responce) => {
    if (error) return console.log('error', error);

    console.log('responce.rows', responce.rows);
});*/
