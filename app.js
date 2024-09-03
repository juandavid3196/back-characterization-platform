const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// //programming API
// const eventRoutes = require('./routes/eventRoutes');
// const subeventRoutes = require('./routes/subeventRoutes');
// const evenStateRoutes = require('./routes/eventStateRoutes');
// const subEvenStateRoutes = require('./routes/subEventStateRoutes');
// const historyEventRoutes = require('./routes/historyEventRoutes');
// const historySubeventRoutes = require('./routes/historySubeventRoutes');
// const reportEventRoutes = require('./routes/reportEventRoutes');

// ///////
// const stateRoutes = require('./routes/stateRoutes');
// const placeRoutes = require('./routes/placeRoutes');
// const modalityRoutes = require('./routes/modalityRoutes');


//Survey Test

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




// app.use('/subevent', subeventRoutes);
// app.use('/event', eventRoutes);
// app.use('/eventstate', evenStateRoutes);
// app.use('/subeventstate', subEvenStateRoutes);
// app.use('/historyevent', historyEventRoutes);
// app.use('/historysubevent', historySubeventRoutes);
// app.use('/report', reportEventRoutes);

// ///////////////
// app.use('/state', stateRoutes);
// app.use('/place', placeRoutes);
// app.use('/modality', modalityRoutes);

app.get('/', (req, res) => {
  return res.send('Bienvenido de nuevo');
});


app.listen(5000, () => {
  console.log('server working!');
})
