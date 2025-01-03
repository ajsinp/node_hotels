const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const MenuItem = require('./models/MenuItem')
const { error } = require('console');



app.get('/', function (req, res) {
  res.send('Welcone to our Hotel');
})


const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes)

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)

app.listen(3000,()=>{
    console.log('Server is listen on port no 3000')
})