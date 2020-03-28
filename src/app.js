const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const ejs = require('ejs');
const app = express();

// Connecting db
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('DB Conneted'))
    .catch(err => console.log(err));

// Importing routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', indexRoutes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Aplicación corriendo desde el puerto ${app.get('port')}`);
});