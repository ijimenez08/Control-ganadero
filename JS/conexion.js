const mysql = require('mysql2');

// Crear una conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'contraseña',
  database: 'nombre_de_la_base_de_datos'
});

// Realizar una consulta
connection.query
(
  'SELECT * FROM tabla',
  function(err, results, fields) 
  {
    console.log(results);
  }
);

// Cerrar la conexión
connection.end();

