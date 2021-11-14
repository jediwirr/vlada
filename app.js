var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var dostoevskyRouter = require('./routes/dostoevsky');
var bluelightsRouter = require('./routes/bluelights');
var vladaRouter = require('./routes/vlada');
var bluegreenRouter = require('./routes/bluegreen');
var countryRouter = require('./routes/country');
var pastelRouter = require('./routes/pastel');
var noiseRouter = require('./routes/noise');
var selfportraitsRouter = require('./routes/selfportraits');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/dostoevsky', dostoevskyRouter);
app.use('/bluelights', bluelightsRouter);
app.use('/vlada', vladaRouter);
app.use('/bluegreen', bluegreenRouter);
app.use('/country', countryRouter);
app.use('/pastel', pastelRouter);
app.use('/noise', noiseRouter);
app.use('/selfportraits', selfportraitsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
