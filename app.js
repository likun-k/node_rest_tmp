const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const logger = require('./config/logger');

var routes = require('./routes/index');

var app = express();

if( 'dev' === process.env.NODE_ENV){
  //开发环境
  app.use(morgan('dev'));

}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

//  捕捉404错误 catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 处理非404的错误（throw 出来的错误)
const _errorHandler = (err, req, res, next) => {
  let errorMsg = err.message;
  logger.error(` ${req.method} ${req.originalUrl} ${errorMsg}`);
  res.status(err.status || 500).json({
    code: -1,
    success: false,
    msg: errorMsg
  });
}
app.use( _errorHandler );


module.exports = app;
