var express = require('express');
var app = express();
var config = require('./config/config');
var run = require('./run');
var api = require('./api/routes');
const morgan = require('morgan');
var path = require('path');

run.init();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

require('./middleware/appMiddlware')(app);

app.use(morgan('dev'));
app.use('/api', api);

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