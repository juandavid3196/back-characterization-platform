const express = require('express');
const router = express.Router();

const answers =  []

// Ruta para obtener todos los elementos
router.get('/', (req, res) => {
    res.status(200).json(answers);
});

// Ruta para obtener un elemento único por ID
router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    const answer = answers.find(s => s.id === itemId);

    if (!answer) {
        res.status(404).json({ error: 'Respuesta no encontrada' , state: false });
    } else {
        res.status(200).json(answer);
    }
});

// Ruta para crear un nuevo elemento
router.post('/', (req, res) => {
    const newAnswer = req.body;
    answers.push(newAnswer);
    res.status(201).json({ message: 'Respuesta creada con éxito', answer: newAnswer });
});

// Ruta para actualizar un elemento por ID
router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const index = answers.findIndex(s => s.id === itemId);

    if (index === -1) {
        res.status(404).json({ error: 'Respuesta no encontrada' });
    } else {
        answers[index] = { ...answers[index], ...req.body, id: itemId };
        res.status(200).json({ message: 'Respuesta actualizada con éxito', answer: answers[index] });
    }
});

// Ruta para eliminar un elemento por ID
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    const index = answers.findIndex(s => s.id === itemId);

    if (index === -1) {
        res.status(404).json({ error: 'Respuesta no encontrada' });
    } else {
        answers.splice(index, 1);
        res.status(200).json({ message: 'Respuesta eliminada con éxito' });
    }
});

module.exports = router;
