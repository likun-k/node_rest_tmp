const resultJson = require('../middlewares/resultJson')

const serverStatus = async (req, res) => {
  let str = 'The service is running properly'
  // res.send({ok: str});
  resultJson.success(res, str);
};


module.exports = {
  serverStatus
}