const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/userdetails", { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const UserDetailsSchema = new mongoose.Schema({
    username:String,
    firstName: String, 
    lastName: String, 
    email:{ type:String, unique:true}, 
    phone: Number,
    bio: String,
    profile: String,
    bgColor: String,
});

const userinfo = mongoose.model('userinfo', UserDetailsSchema);

module.exports = userinfo
