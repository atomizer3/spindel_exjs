const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'spindel',
  password: 'q1w2e3Q!W@E#',
  database: 'SPINDEL_DB'
})

connection.connect()

connection.query('SELECT ID, TEMP_VALUE from SPINDEL_DB.BREW_TEMP', (err, rows, fields) => {
  if (err) throw err
  console.log('Query result: ', rows)
  console.log('row', rows[0].ID+' '+rows[0].TEMP_VALUE)
})

connection.end()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
