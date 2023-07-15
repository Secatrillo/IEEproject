import mysql from 'mysql2';
const config = {
    host: 'sql7.freesqldatabase.com',
    user: 'sql7632981',
    password: 'H16SstkuFF',
    database: 'sql7632981',
};
// Create a MySQL pool 
const pool = mysql.createPool(config);
// Export the pool 
export default pool;