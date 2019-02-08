require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const app = express();
const sessions = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const massive = require('massive');

app.use(bodyParser.json())
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null }));
    

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => 
    console.log( `we are at port`, SERVER_PORT ));
  });


  app.post('/auth/register', ctrl.register);
  app.post('/auth/login', ctrl.login)
  
  app.get('/dashboard/search/?user:id', ctrl.search)

