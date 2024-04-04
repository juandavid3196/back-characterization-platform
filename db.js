const mysql = require('mysql2');

// Configura los parámetros de la conexión
const connection = mysql.createConnection({
    host: 'localhost',      // El host de la base de datos
    user: 'root',     // Tu nombre de usuario de MySQL
    password: 'root', // Tu contraseña de MySQL
    database: 'tptu_db' // El nombre de la base de datos que deseas conectar
});

// Conecta a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
    // Aquí puedes ejecutar consultas SQL o realizar otras operaciones en la base de datos
});

// Una vez que hayas terminado de trabajar con la base de datos, cierra la conexión cuando ya no la necesites.
// Esto es importante para liberar recursos.
module.exports = connection;