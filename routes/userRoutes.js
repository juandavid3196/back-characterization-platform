const express = require('express');
const router = express.Router();

const users =  [
    {
        "id": 1,
        "name": "Alejandro Velez",
        "surveys_count": 9,
        "role": 'Admin',
        "date_creation": "2023-06-01T10:00:00Z",
        "created_by": 101,
        "updated_date": "2023-06-10T15:00:00Z",
        "updated_by": "admin"
    },
    {
        "id": 2,
        "name": "Camila Alvarez",
        "surveys_count": 12,
        'role':'Auditor',
        "date_creation": "2023-05-15T08:30:00Z",
        "created_by": 102,
        "updated_date": "2023-06-05T12:00:00Z",
        "updated_by": "hr_manager"
    },
    {
        "id": 3,
        "name": "Daniel Martinez",
        "surveys_count": 43,
        'role':'Creador',
        "date_creation": "2023-04-20T14:00:00Z",
        "created_by": 103,
        "updated_date": "2023-05-01T09:30:00Z",
        "updated_by": "product_manager"
    },
]

// Ruta para obtener todos los elementos
router.get('/', (req, res) => {
    res.status(200).json(users);
});

// Ruta para obtener un elemento único por ID
router.get('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const survey = users.find(s => s.id === itemId);

    if (!survey) {
        res.status(404).json({ error: 'Encuesta no encontrada' });
    } else {
        res.status(200).json(survey);
    }
});

// Ruta para crear un nuevo elemento
router.post('/', (req, res) => {
    const newSurvey = req.body;
    newSurvey.id = users.length ? users[users.length - 1].id + 1 : 1; // Generar un nuevo ID

    users.push(newSurvey);
    res.status(201).json({ message: 'Encuesta creada con éxito', survey: newSurvey });
});

// Ruta para actualizar un elemento por ID
router.put('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = users.findIndex(s => s.id === itemId);

    if (index === -1) {
        res.status(404).json({ error: 'Encuesta no encontrada' });
    } else {
        users[index] = { ...users[index], ...req.body, id: itemId };
        res.status(200).json({ message: 'Encuesta actualizada con éxito', survey: users[index] });
    }
});

// Ruta para eliminar un elemento por ID
router.delete('/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = users.findIndex(s => s.id === itemId);

    if (index === -1) {
        res.status(404).json({ error: 'Encuesta no encontrada' });
    } else {
        users.splice(index, 1);
        res.status(200).json({ message: 'Encuesta eliminada con éxito' });
    }
});

module.exports = router;
