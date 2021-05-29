// modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

// routers
var indexRouter = require('./routes/index');
var mapRouter = require('./routes/map');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var forgotPasswordRouter = require('./routes/forgot');
var donateRouter = require('./routes/donate');
var infoRouter = require('./routes/info');
var adminRouter = require('./routes/admin');
var logoutRouter = require('./routes/logout');
var adminLoginRouter = require('./routes/admin-login');
var resetRouter = require('./routes/reset');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/map', mapRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/forgot', forgotPasswordRouter);
app.use('/donate', donateRouter);
app.use('/info', infoRouter);
app.use('/admin', adminRouter);
app.use('/logout', logoutRouter);
app.use('/admin-login', adminLoginRouter);
app.use('/reset', resetRouter);

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
  res.render('error');
});

module.exports = app;
