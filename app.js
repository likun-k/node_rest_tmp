const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan');
const logger = require('./config/logger');
const {version} = require('./package.json');
const path = require('path');

const app = express();

// swagger
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express")
const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "share_house",
      version,
      description: `
        line1
        line2
        line3...
      `,
    },
  },
  apis: [path.join(__dirname, './routes/*.js')],
};
// 定义swagger 访问的路由
const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(swaggerSpec));

// # cors
const cors = require('cors'); //引入cors库
// 因为cors是中间件，因此我们要先调用app.use装载中间件，以便后面我们的请求都能够经过cors到达不同的路由
app.use(cors());

if( 'dev' === process.env.NODE_ENV){
  //开发环境
  app.use(morgan('dev'));

}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require('./routes/index');
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

// connect sql
const db = require('./src/models')
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });




module.exports = app;
