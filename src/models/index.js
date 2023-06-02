const config = require('../../config/config').config

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  port: config.PORT,
  dialect: config.dialect,
  // operatorsAliases: false, // 别名 $gt => Op.gt
  //timezone: 'UTC',
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 引入包下面的 models  == ORM
//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);

// 测试连接
// sequelize.authenticate().then(_=>{
//   console.log("数据库连接成功!");
// }).catch(err=>{
//   console.log("数据库连接失败! ", err);
// })

module.exports = db;