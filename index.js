
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

// body parser
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', require('./routes/auth'));


app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor en el puerto ${process.env.PORT || 3000}`);
});