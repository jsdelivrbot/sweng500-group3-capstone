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

app.get('/surveyreports', function(request, response) {
    response.render('pages/surveyreports');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var pg = require('pg');

// app.get('/dblogic', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('SELECT * FROM test_table', function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/dblogic', {results: result.rows} ); }
//     });
//   });
// });

// app.get('/dblogicins', function (request, response) {
//     pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//         client.query('INSERT INTO test_table(id, name) VALUES($1, $2)', [request.param('id'), request.param('name')], function(err, result) {
//             done();
//             if (err)
//             { console.error(err); response.send("Error " + err); }
//             else
//             { response.render('pages/dblogic', {results: result.rows} ); }
//         });
//     });
// });

// app.get('/dblogic', function(request, response) {
//     pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//
//             client.query('SELECT * FROM test_table', function(err, result) {
//                 done();
//                 if (err) {
//                     console.error(err); response.send("Error " + err);
//                 } else {
//                     response.render('pages/dblogic', {results: result.rows} );
//                 }
//             });
//
//         });
//     response.render('pages/dblogic');
// });
//
// app.get('/dblogicquery', function (request, response) {
//     pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//         client.query('INSERT INTO test_table(id, name) VALUES($1, $2)', [request.param('id'), request.param('name')], function(err, result) {
//             done();
//             if (err) {
//                 console.error(err); response.send("Error " + err);
//             }
//             else {
//                 client.query('SELECT * FROM test_table', function(err, result) {
//                     done();
//                     if (err) {
//                         console.error(err); response.send("Error " + err);
//                     } else {
//                         response.render('pages/dblogic', {results: result.rows} );
//                     }
//                 });
//             }
//         });
//     });
// });

app.get('/dblogic', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        if (typeof request.param('id') != 'undefined') {
            client.query('INSERT INTO test_table(id, name) VALUES($1, $2)', [request.param('id'), request.param('name')], function(err, result) {
                done();
                if (err) {
                    console.error(err); response.send("Error " + err);
                }
                else {
                    client.query('SELECT * FROM test_table', function(err, result) {
                        done();
                        if (err) {
                            console.error(err); response.send("Error " + err);
                        } else {
                            response.render('pages/dblogic', {results: result.rows} );
                        }
                    });
                }
            });
        } else {
            client.query('SELECT * FROM test_table', function(err, result) {
                done();
                if (err) {
                    console.error(err); response.send("Error " + err);
                } else {
                    response.render('pages/dblogic', {results: result.rows} );
                }
            });
        }
    });
});

//TODO: Enable body-parser functionality in heroku
//TODO: Enable post operation for database updates/inserts
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); //support json encoded bodies
// app.use(bodyParser.urlencoded({extended: true})); //support encoded bodies
//
// app.post('/dblogic', function (request, response) {
//     pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//         client.query('INSERT INTO test_table(id, name) VALUES($1, $2)', [request.body.id, request.body.name], function(err, result) {
//             done();
//             if (err)
//             { console.error(err); response.send("Error " + err); }
//             else
//             { response.render('pages/dblogic', {results: result.rows} ); }
//         });
//     });
// });