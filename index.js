var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/generic', function(request, response) {
  response.render('pages/generic');
});

app.get('/elements', function(request, response) {
  response.render('pages/elements');
});

app.get('/episodesurvey', function(request, response) {
  response.render('pages/episodesurvey');
});

app.get('/adjustmentresponsesurvey', function(request, response) {
  response.render('pages/adjustmentresponsesurvey');
});

app.get('/emotionalstatesurvey', function(request, response) {
  response.render('pages/emotionalstatesurvey');
});

app.get('/faq', function(request, response) {
  response.render('pages/faq');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var pg = require('pg');

app.get('/dblogic', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/dblogic', {results: result.rows} ); }
    });
  });
});

app.post('/dblogic/record', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('INSERT INTO test_table(id, name) VALUES($1, $2)', [request.id, request.name], function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { response.render('pages/dblogic', {results: result.rows} ); }
        });
    });
});