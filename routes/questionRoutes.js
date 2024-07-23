const express = require('express');
const router = express.Router();

let questions = [];

// Ruta para obtener todos los elementos
router.get('/', (req, res) => {
    res.status(200).json(questions);
});

// Ruta para obtener un elemento único por ID
router.get('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const question = questions.find(s => s.id === itemId);

    if (!question) {
        res.status(404).json({ error: 'Pregunta no encontrada' });
    } else {
        res.status(200).json(question);
    }
});

router.put('/', (req, res) => {
    const newOptions = req.body; 
    if (Array.isArray(newOptions)) {
      questions = newOptions;
      // Devolver el array actualizado
      res.status(200).json({ message: 'Opciones actualizadas con éxito', questions });
    } else {
      res.status(400).json({ message: 'El cuerpo de la solicitud debe ser un array' });
    }
  });


// Ruta para eliminar un elemento por ID
router.delete('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = questions.findIndex(s => s.id === itemId);

    if (index === -1) {
        res.status(404).json({ error: 'pregunta no encontrada' });
    } else {
        questions.splice(index, 1);
        res.status(200).json({ message: 'pregunta eliminada con éxito' });
    }
});

module.exports = router;
