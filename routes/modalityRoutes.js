const express = require('express');
const router = express.Router();

const db = require('../db');

//Ruta para obtener todos los elementos
router.get('/', (req, res) => {
    db.query('SELECT * FROM modalities', (error, results, fields) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            return;
        }
        return res.status(200).json(results);
    });
});


// Ruta para obtener un elemento único por ID
router.get('/:id', (req, res) => {
    const itemId = req.params.id;

    db.query('SELECT * FROM modalities WHERE id = ?', [itemId], (error, results, fields) => {
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
    db.query('INSERT INTO modalities SET ?', newItem, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar los datos:', error);
            res.status(500).json({ error: 'Error al insertar los datos en la base de datos' });
        } else {
            console.log('Datos insertados con éxito.');
            res.status(201).json({ message: 'Datos insertados con éxito' });
        }
    });
});

// Ruta para actualizar un elemento por ID
router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;

    // Realiza la actualización de datos en la base de datos
    db.query('UPDATE modalities SET ? WHERE id = ?', [updatedItem, itemId], (error, results, fields) => {
        if (error) {
            console.error('Error al actualizar los datos:', error);
            res.status(500).json({ error: 'Error al actualizar los datos en la base de datos' });
        } else {
            console.log('Datos actualizados con éxito.');
            res.status(200).json({ message: 'Datos actualizados con éxito' });
        }
    });
});


// Ruta para eliminar un elemento por ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    // Realiza la eliminación del recurso en la base de datos
    db.query('DELETE FROM modalities WHERE id = ?', [id], (error, results, fields) => {
        if (error) {
            console.error('Error al eliminar el recurso:', error);
            res.status(500).json({ error: 'Error al eliminar el recurso en la base de datos' });
        } else {
            console.log('Recurso eliminado con éxito.');
            res.status(200).json({ message: 'Recurso eliminado con éxito' });
        }
    });
});


module.exports = router;
