var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var basicAuth = require('express-basic-auth')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser = require('body-parser');
var app = express();
// app.use(basicAuth({
//   users: { 'admin': 'abbadabbaQwerty@123$%^' }
// }))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    next();

});

app.use(function(req, res, next) {

    // -----------------------------------------------------------------------
    // authentication middleware

    // const auth = {login: 'yourlogin', password: 'yourpassword'} // change this

    // // parse login and password from headers
    // const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    // const [login, password] = new Buffer(b64auth, 'base64').toString().split(':')

    // // Verify login and password are set and correct
    // if (login && password && login === auth.login && password === auth.password) {
    //   // Access granted...
    //   return next()
    // }

    // // Access denied...
    // res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    // res.status(401).send('Authentication required.') // custom message
    let now = new Date();
    console.log(now, "++++++++++++++++++++++++++")
    console.log(req.url, ">>>", req.headers)
    console.log(now, "++++++++++++++++++++++++++")
    next();

    // -----------------------------------------------------------------------
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/evil', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(req, res, next) {

    // -----------------------------------------------------------------------
    // authentication middleware

    // const auth = {login: 'yourlogin', password: 'yourpassword'} // change this

    // // parse login and password from headers
    // const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    // const [login, password] = new Buffer(b64auth, 'base64').toString().split(':')

    // // Verify login and password are set and correct
    // if (login && password && login === auth.login && password === auth.password) {
    //   // Access granted...
    //   return next()
    // }

    // // Access denied...
    // res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    // res.status(401).send('Authentication required.') // custom message
    let now = new Date();
    console.log(now, "++++++++++++++++++++++++++")
    console.log(req.url, ">>>", req.headers)
    console.log(now, "++++++++++++++++++++++++++")
    next();

    // -----------------------------------------------------------------------
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
console.log("Done")
module.exports = app;