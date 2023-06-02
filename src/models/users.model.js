module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER(10), // 整数类型
      allowNull: false, // 不允许为空
      primaryKey: true, // 设置为主键
      autoIncrement: true // 允许自增
    },
    username: {
      type: Sequelize.STRING(255),
      allowNull: false,
      defaultValue: 0
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: true,
      defaultValue: 0,
      comment: 'email',
    },
    age: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    gender: {
      type: Sequelize.ENUM(['1', '0', '-1']), // 注意枚举类型为数组
      allowNull: false,
      defaultValue: '-1',
      comment: '1:man, 0:woman, -1: not-set',
    }
  }, {
    // 用来设置字段以外的其他信息
    timestamps: false,
    paranoid: false,
    freezeTableName: true,
    tableName: 'users',
    indexes: [{
      name: 'uname',
      fields: ['username']
    }]
  });

  return users;
};