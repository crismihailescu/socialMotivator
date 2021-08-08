var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var usersRouter = require('./routes/users');
var groupsRouter = require('./routes/groups');
var activitiesRouter = require('./routes/activities');
var pastActivitiesRouter = require('./routes/pastActivities');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../ui/build')));
app.use(cors());

app.use('/users', usersRouter);
app.use('/groups', groupsRouter);
app.use('/activities', activitiesRouter);
app.use('/pastActivities', pastActivitiesRouter);


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

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../ui/build", "index.html"));
});

module.exports = app;
