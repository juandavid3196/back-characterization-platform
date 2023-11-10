const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req, res) => {
    db.query(`SELECT
        e.general_name,
        e.date_start,
        e.date_finishing,
        e.place,
        s.type_state,
        s.date_state 
    FROM eventos AS e
    JOIN eventstates AS s ON e.id = s.event_id
    UNION
    SELECT
     se.specific_name,
        se.date_start,
        se.date_finishing,
        se.place,
        ss.type_state,
        ss.date_state
    FROM sub_eventos AS se
    JOIN subeventstates AS ss ON se.id = ss.subevent_id`, (error, results, fields) => {
        if (error) {
            console.error('Error al ejecutar la consulta:', error);
            return;
        }
        return res.status(200).json(results);
    });
});

module.exports = router;