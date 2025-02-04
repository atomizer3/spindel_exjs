const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors());

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '192.168.0.109',
  user: 'spindel',
  password: 'q1w2e3Q!W@E#',
  database: 'SPINDEL_DB'
})

//connection.connect()

//setInterval(()=>{
//	connection.query('SELECT ID, TEMP_VALUE from SPINDEL_DB.BREW_TEMP', (err, rows, fields) => {
//	  if (err) throw err
//	  console.log('Query result: ', rows)
//	  console.log('row', rows[0].ID+' '+rows[0].TEMP_VALUE)
//	})
//},3000)


//connection.end()

app.get('/', (req, res) => {
  console.log('Dupa')
  res.send({resp:'Hello World!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
