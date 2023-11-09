const express = require('express');
const router = express.Router();

const db = require('../db');



// Ruta para obtener un elemento único por ID
router.get('/:id', (req, res) => {
    const itemId = req.params.id;

    db.query('SELECT * FROM historyeventstates WHERE eventstate_id = ?', [itemId], (error, results, fields) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Error en la consulta a la base de datos' });
        } else {
            console.log('Resultados de la consulta:', results);
            if (results.length === 0) {
                res.status(404).json({ error: 'Evento no encontrado' });
            } else {
                res.status(200).json(results[0]);
            }
        }
    });
});


// Ruta para crear un nuevo elemento
router.post('/', (req, res) => {
    const newItem = req.body;

    // Realiza la inserción de datos en la base de datos
    db.query('INSERT INTO historyeventstates SET ?', newItem, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar los datos:', error);
            res.status(500).json({ error: 'Error al insertar los datos en la base de datos' });
        } else {
            console.log('Datos insertados con éxito.');
            res.status(201).json({ message: 'Datos insertados con éxito' });
        }
    });
});





module.exports = router;
