const userinfo = require('../Schema/schema');

function addUserData(data){
  const userData = new userinfo({
    username: "Ritesh123",
    firstName: "Ritesh",
    lastName: "Choudhary",
    email: "Riteshh@gmail.com",
    phone: 9785263692,
    bio: "biography",
    profile: "https://icons.iconarchive.com/icons/icons8/android/256/Users-User-icon.png",
    bgColor: "white",
  })

  userData.save(function(err, data){ 
    if(err) return console.log(err)
  })
}

module.exports = addUserData;
