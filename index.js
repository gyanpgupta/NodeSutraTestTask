const express = require('express');
const bodyParser = require('body-parser') ;
const cors = require('cors');
const addUserData = require('./DBOperations/addOperation');
const getUserData = require('./DBOperations/getOperation');
const updateUserData = require('./DBOperations/updateOperation');

const app = express();
const port = 8000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/getUserData', getUserData);

app.put('/updateUserData', (req, res)=>{
    console.log(updateUserData(req.body));
})

app.use('/', addUserData);

app.listen(port, ()=>{
    console.log(`server runs on ${port}`)
})
