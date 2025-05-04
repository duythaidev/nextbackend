import express from 'express';
import bodyParser from 'body-parser';
import configRoutes from './routes/configAPI';
var cors = require('cors')

require('dotenv').config()
const app = express();

app.use(cors({credentials: true, origin: true}))
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())

// Routes
configRoutes(app)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});