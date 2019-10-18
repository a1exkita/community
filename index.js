var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
// heroku database
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
pool.query('SELECT NOW()', (err, res) =>{
        console.log(err, res)
})

var port = process.env.PORT || 5000

var app = express()


// use handlebars for parsing
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(express.static('public')) // look up later


app.get('/', (req, res) => res.status(200).render('index'))



// app.get('/db', async (req, res) => {
//     try {
//       const client = await pool.connect()
//       const result = await client.query('SELECT * FROM test_table');
//       const results = { 'results': (result) ? result.rows : null};
//       // res.render('pages/db', results );
//       client.release();
//     } catch (err) {
//       console.error(err);
//       res.send("Error " + err);
//     }
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
