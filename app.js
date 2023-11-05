const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//programming API
const eventRoutes = require('./routes/eventRoutes');
const subeventRoutes = require('./routes/subeventRoutes');
const evenStateRoutes = require('./routes/eventStateRoutes');
const subEvenStateRoutes = require('./routes/subEventStateRoutes');

app.use('/subevent', subeventRoutes);
app.use('/event', eventRoutes);
app.use('/eventstate', evenStateRoutes);
app.use('/subeventstate', subEvenStateRoutes);


app.get('/', (req, res) => {
  return res.send('Bienvenido de nuevo');
});


app.listen(5000, () => {
  console.log('server working!');
})