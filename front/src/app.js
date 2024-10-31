import express from 'express';
import handlebars from 'express-handlebars';
import bodyParser  from 'body-parser';

import vehicleRouter from './routes/vehicle-route.js';
import homeRouter from './routes/home.js';
import tableRouter from './routes/table.js';
import editRouter from './routes/edit.js';

const app = express();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

/**
 * Config
 */
//handlebars
app.engine('handlebars', handlebars.engine()); 
app.set('view engine', 'handlebars');
app.set('views', './front/src/views');
// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// static
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', homeRouter);
app.use('/cadastrar', vehicleRouter);
app.use('/table', tableRouter);
app.use('/table/edit/', editRouter);

app.listen(3021, () => console.log("Vehicle management system 1.0"));  