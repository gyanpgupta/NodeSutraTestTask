const userinfo = require('../Schema/schema');

function updateUserData(data){
  userinfo.updateOne({},
    {$set: {
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email:data.email,
      phone:data.phone,
      bio: data.bio,
      profile: data.profile,
      bgColor: data.bgColor,
    }}, function(err){}
  );
};

module.exports = updateUserData;
