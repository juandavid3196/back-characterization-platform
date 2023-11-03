const express = require('express');
const router = express.Router();

// Un array de objetos para almacenar la información
const programmingData = [];

// Ruta para obtener todos los elementos
router.get('/', (req, res) => {
    return res.json(programmingData);
});


// Ruta para obtener un elemento único por ID
router.get('/:id', (req, res) => {
    const itemId = req.params.id;

    const item = programmingData.find(item => item.id === itemId);

    if (item) {
        return res.json(item);
    } else {
        return res.status(404).json({ error: 'Elemento no encontrado' });
    }
});


// Ruta para crear un nuevo elemento
router.post('/', (req, res) => {
    const newItem = req.body;
    programmingData.push(newItem);
    return res.json(newItem);
});

// Ruta para actualizar un elemento por ID
router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;

    // Encuentra y actualiza el elemento en el array
    for (let i = 0; i < programmingData.length; i++) {
        if (programmingData[i].id === itemId) {
            programmingData[i] = { ...programmingData[i], ...updatedItem };
            return res.json(programmingData[i]);
        }
    }

    return res.status(404).json({ error: 'Elemento no encontrado' });
});

// Ruta para eliminar un elemento por ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const indice = programmingData.findIndex(event => event.id == id);
    if (indice >= 0) {
        programmingData.splice(indice, 1);
        return res.send("Elemento Eliminado");
    } else {
        return res.send("The index doesn't exist");
    }
});

module.exports = router;
