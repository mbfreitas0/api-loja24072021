var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

//var index = require('./routes/index');
//var users = require('./routes/users');
//var produtos = require('./routes/products');

var app = express();

// Banco de dados 
var mysql = require('mysql');
pool = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'mbf190377',
  database: 'ecommerce'
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
app.delete('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})

})

const productRoute = require('./routes/products');
//const grupoRoute = require('./routes/grupos');
//const marcaRoute = require('./routes/marcas');
//const locacaoRoute = require('./routes/locacoes');
//const usuarioRoute = require('./routes/usuarios');

//app.use('/', index);
//app.use('/users', usersRoute);
app.use('/products', productRoute);
//app.use('/grupos', grupoRoute);
//app.use('/marcas', marcaRoute);
//app.use('/locacoes', locacaoRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
