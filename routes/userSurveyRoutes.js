const express = require('express');
const router = express.Router();

const surveys =  [
    {
        "id": "1",
        "title": "Encuesta de satisfacción del cliente",
        "questions":[],
        "description": "Encuesta para medir la satisfacción de nuestros clientes sobre los servicios prestados.",
        "state": "Terminada",
        "date_creation": "04/09/2020",
        "created_by": 101,
        "updated_date": "2023-06-10T15:00:00Z",
        "updated_by": "admin"
    },
    {
        "id": "2",
        "title": "Encuesta de salud laboral",
        "questions":[],
        "description": "Encuesta para evaluar la salud y el bienestar de los empleados en el lugar de trabajo.",
        "state": "Sin Resolver",
        "date_creation": "07/12/1996",
        "created_by": 102,
        "updated_date": "2023-06-05T12:00:00Z",
        "updated_by": "hr_manager"
    },
   
]

// Ruta para obtener todos los elementos
router.get('/', (req, res) => {
    res.status(200).json(surveys);
});

// Ruta para obtener un elemento único por ID
router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    const survey = surveys.find(s => s.id === itemId);

    if (!survey) {
        res.status(404).json({ error: 'Encuesta no encontrada' , state: false });
    } else {
        res.status(200).json(survey);
    }
});

// Ruta para crear un nuevo elemento
router.post('/', (req, res) => {
    const newSurvey = req.body;
    surveys.push(newSurvey);
    res.status(201).json({ message: 'Encuesta creada con éxito', survey: newSurvey });
});

// Ruta para actualizar un elemento por ID
router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    const index = surveys.findIndex(s => s.id === itemId);

    if (index === -1) {
        res.status(404).json({ error: 'Encuesta no encontrada' });
    } else {
        surveys[index] = { ...surveys[index], ...req.body, id: itemId };
        res.status(200).json({ message: 'Encuesta actualizada con éxito', survey: surveys[index] });
    }
});

// Ruta para eliminar un elemento por ID
router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    const index = surveys.findIndex(s => s.id === itemId);

    if (index === -1) {
        res.status(404).json({ error: 'Encuesta no encontrada' });
    } else {
        surveys.splice(index, 1);
        res.status(200).json({ message: 'Encuesta eliminada con éxito' });
    }
});

module.exports = router;
