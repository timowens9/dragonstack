const pool = require('../../databasePool');

class GenerationTable {

   static storeGeneration(generation) {
        pool.query(
            'INSERT INTO generation(expiration) VALUES($1)',
            [generation.expiration],
            (error, responce) => {
                if (error) return console.error(error);
            }
        );
    }
}

module.exports = GenerationTable;