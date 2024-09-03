const express = require('express');
const router = express.Router();

const surveys =  [
    {
        "id": "1",
        "title": "Encuesta de satisfacción del cliente",
        "questions":[],
        "description": "Encuesta para medir la satisfacción de nuestros clientes sobre los servicios prestados.",
        "state": "Publicada",
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
        "state": "Creada",
        "date_creation": "07/12/1996",
        "created_by": 102,
        "updated_date": "2023-06-05T12:00:00Z",
        "updated_by": "hr_manager"
    },
    {
        "id": "3",
        "title": "Encuesta de opinión sobre nuevos productos",
        "questions":[],
        "description": "Encuesta para recopilar opiniones de los clientes sobre los nuevos productos lanzados al mercado.",
        "state": "Publicada",
        "date_creation": "28/02/2022",
        "created_by": 103,
        "updated_date": "2023-05-01T09:30:00Z",
        "updated_by": "product_manager"
    },
    {
        "id": "4",
        "title": "Encuesta de clima organizacional",
        "questions":[],
        "description": "Encuesta para analizar el clima organizacional y el ambiente de trabajo dentro de la empresa.",
        "state": "Editada",
        "date_creation": "06/06/2008",
        "created_by": 104,
        "updated_date": "2023-04-10T16:45:00Z",
        "updated_by": "admin"
    },
    {
        "id": "5",
        "title": "Encuesta de evaluación de desempeño",
        "questions":[],
        "description": "Encuesta para evaluar el desempeño de los empleados durante el último trimestre.",
        "state": "Publicada",
        "date_creation": "31/12/1996",
        "created_by": 105,
        "updated_date": "2023-02-05T13:20:00Z",
        "updated_by": "hr_manager"
    }
]

// Ruta para obtener todos los elementos
router.get('/', (req, res) => {
    res.status(200).json(surveys);
});

router.get('/:id', (req, res) => {
    const itemId = req.params.id;
    const survey = surveys.find(s => s.id === parseInt(itemId) || s.id === itemId);

    if (!survey) {
        res.status(404).json({ error: 'Encuesta no encontrada' });
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
