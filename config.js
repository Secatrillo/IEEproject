import mysql from 'mysql2';
const config = {
    host: '192.168.31.128',
    user: 'Mikhail',
    password: 'Anihilatinion1',
    database: 'api',
};
// Create a MySQL pool 
const pool = mysql.createPool(config);
// Export the pool 
export default pool;