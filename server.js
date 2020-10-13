const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express()

// static content set to public
app.use(express.static('public'));

// parse app body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// handlebars handler
let expH = require('express-handlebars')

app.engine('handlebars', expH({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// import routes, server given access
let routes = require('./controllers/burgers_controller');

app.use(routes);

// sever start
app.listen(PORT, function (){
  //  server log, to show a successful start
  console.log('server listening on:' + PORT);
})