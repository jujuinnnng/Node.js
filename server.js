const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('Start Server : localhost:3000')
});

app.set('views', __dirname + '/views');
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

// 화면연결
app.get('/', function (req, res){
    res.render('index.html');
});

// url경로추가
app.get('/about', function (req, res){
    res.render('about.html');
});

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '1234',
  database        : 'hr'
});

// 디비 연결
app.get('/db', function (req, res){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM Test', function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log('results', results);
        
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
});