import express from 'express';
import apiRoutes from './routes/api';
import bodyParser from 'body-parser';
require('dotenv').config()
const app = express();

app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
// Routes
app.use('/api/', apiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});