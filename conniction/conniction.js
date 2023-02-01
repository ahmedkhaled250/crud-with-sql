import mysql from 'mysql2'
const sql = mysql.createConnection({
    user : "root",
    password : '',
    database: 'userdb',
    host: '127.0.0.1'
})
export default sql