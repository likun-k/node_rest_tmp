const env = process.env.NODE_ENV

// tencent rds 测试 ，截止 2023-07月
const dev = {
  HOST: "sh-cynosdbmysql-grp-05aa7gl2.sql.tencentcdb.com",
  PORT: "20789",
  USER: "root",
  PASSWORD: "likun!123",
  DB: "house",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

const production = {
  HOST: "*",
  PORT: "3306",
  USER: "*",
  PASSWORD: "*",
  DB: "*",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

module.exports = {
  env : env,
  config: env === 'production' ? production : dev
}