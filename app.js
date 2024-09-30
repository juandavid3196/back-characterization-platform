const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const surveyRoutes = require('./routes/surveyRoutes');
const userSurveyRoutes = require('./routes/userSurveyRoutes');
const bankRoutes = require('./routes/bankRoutes');
const questionRoutes = require('./routes/questionRoutes');
const userRoutes = require('./routes/userRoutes');
const answerRoutes = require('./routes/answerRoutes');

app.use('/survey', surveyRoutes);
app.use('/usersurvey', userSurveyRoutes);
app.use('/bank', bankRoutes);
app.use('/answer', answerRoutes);
app.use('/question', questionRoutes);
app.use('/user', userRoutes);



app.get('/', (req, res) => {
  return res.send('Bienvenido de nuevo');
});

