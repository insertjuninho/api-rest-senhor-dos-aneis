const express = require ("express");
const sql = require("mysql")
const app = express();
const dotenv = require ('dotenv');
const path = require('path')

dotenv.config({ path: '.env'});

const db = sql.createConnection({

  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, 'style')
app.use(express.static(publicDirectory));

//Passa url encriptografada
app.use(express.urlencoded({ extended: false}));
//Passa json Body client
app.use(express.json())
app.set('view engine', 'hbs');

db.connect( (error) => {
  if (error) {
    console.log(error);
  } else{
    console.log("Sucess Connected")
  }
})

//Difine Routes
 app.use('/', require('./routes/routes'));
 //app.use('/auth', require('./routes/auth'));

app.listen(3333, () => {
  console.log("SERVER OK");
})