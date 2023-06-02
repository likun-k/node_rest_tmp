const success = (res, data, msg = '请求成功') => {
    res.json({
      code: 200,
      data: data,
      msg: msg,
      timestamp: new Date().getTime(),
    });
}

const fail = (res, data, code = -1, msg = '请求失败') => {
  res.json({
    code: code || -1 ,
    data: data,
    msg: msg,
    timestamp: new Date().getTime(),
  });
}

module.exports = {
  success,
  fail
}