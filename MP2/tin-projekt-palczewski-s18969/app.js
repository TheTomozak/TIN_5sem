var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

const zamowieniaRouter = require('./routes/zamowieniaRoute');
const produktyControler = require('./routes/produktyRoute');
const pozycjaZamowienControler = require('./routes/pozycjaZamowienRoute');

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });
var app = express();

const produktApiRouter = require('./routes/api/ProduktApiRoute');
const zamowieniaApiRouter = require('./routes/api/ZamowienieApiRoute');
const zamowieniaProduktyApiRouter = require('./routes/api/ZamowienieProduktyApiRoute');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
////////////////////////////////////////////////////////////
//Tam wyżej jest parsowanie body, wszytskie nasz app.use muszą być pod tym!!
////////////////////////////////////////////////////////////

const session = require('express-session');
app.use(session({
    secret: 'my_secret_password',
    resave: false
}));

app.use('/api/produkt', produktApiRouter);
app.use('/api/zamowienie', zamowieniaApiRouter);
app.use('/api/zamowienieProdukt', zamowieniaProduktyApiRouter);

app.use('/', indexRouter);
app.use('/zamowienia', zamowieniaRouter);
app.use('/produkty', produktyControler);
app.use('/pozycjaZamowien', pozycjaZamowienControler);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.render('error');
});

module.exports = app;
