const resultJson = require('../middlewares/resultJson')
const db = require('../models')
const users = db.users
const Op = db.Sequelize.Op

const addUser = async (req, res) => {
  resultJson.success(res, str);
}


const deleteUser = async (req, res) => {
  resultJson.success(res, str);
}


const updateUser = async (req, res) => {
  resultJson.success(res, str);
}


const queryUser = async (req, res) => {
  let id = req.params.id;
  users.findByPk( id ).then(data => {
    if(data){
      resultJson.success(res, data);
    }else{
      resultJson.fail(res, 'user not found!', 404);
    }
  }).catch(err => {
    resultJson.fail(res, data);
  })
}

const queryAll = async (req, res) => {
  const name = req.query.name;
  let condition = name ? { username: { [Op.like]: `%${name}%` } } : null;
  users.findAll({ where : condition }).then(data => {
    resultJson.success(res, data);
  }).catch(err => {
    resultJson.fail(res, data);
  })
}

module.exports = {
  addUser,
  deleteUser,
  updateUser,
  queryUser,
  queryAll
}