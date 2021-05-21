const userinfo = require('../Schema/schema');

function getUserData(id, res){
  userinfo.findOne({}, function(err, data){
    console.log(data)
    if(data)
      res.send(data)
    else
      res.send('no data available');
  })
}
module.exports = getUserData;