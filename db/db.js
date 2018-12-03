const mysql = require('promise-mysql');

const config = {
    host:'localhost',
    password:'',
    database:'ilapmx',
    user:'root',
    connectionLimit:10
};

module.exports = async () => {
    try {
        let pool;
        let con;
        if (pool) {
            con = pool.getConnection();
        } else {
            pool = await mysql.createPool(config);
            con = pool.getConnection();
        }
        console.log('conectado a la base de datos');
        return con;
    }   catch(error) {
        console.log('error', error);
        throw error;
    }
}
