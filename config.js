import mysql from 'mysql2';
const config = {
    host: 'sql7.freesqldatabase.com',
    user: 'sql7631273',
    password: 'nKpX4ElVeU',
    database: 'sql7631273',
};
// Create a MySQL pool 
const pool = mysql.createPool(config);
// Export the pool 
export default pool;