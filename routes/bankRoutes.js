const express = require('express');
const router = express.Router();

banks = []

// Ruta para obtener todos los elementos
router.get('/', (req, res) => {
    res.status(200).json(banks);
});


// Ruta para crear un nuevo elemento
router.post('/', (req, res) => {
    const newBank = req.body;
    banks.push(newBank);
    res.status(201).json({ message: 'pregunta creada con éxito', bank: newBank });
});



// Ruta para eliminar un elemento por ID
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    const index = banks.findIndex(s => s.id === itemId);
    if (index === -1) {
        res.status(404).json({ error: 'pregunta no encontrada' });
    } else {
        banks.splice(index, 1);
        res.status(200).json({ message: 'pregunta eliminada con éxito' });
    }
});

module.exports = router;
