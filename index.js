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

//app.get('/episodesurvey', function(request, response) {
//  response.render('pages/episodesurvey');
//});

// DR - commenting out original app.get for adjustmentresponsesurvey (Start)
// app.get('/adjustmentresponsesurvey', function(request, response) {
//   response.render('pages/adjustmentresponsesurvey');
// });
// DR - commenting out original app.get for adjustmentresponsesurvey (End)

// ML - commenting out original app.get for emotionalstatesurvey
// app.get('/emotionalstatesurvey', function(request, response) {
//   response.render('pages/emotionalstatesurvey');
// });

// ML - new app.get for emotionalstatesurvey with function to connect to postgres
app.get('/emotionalstatesurvey', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        if (typeof request.param('esname') != 'undefined') {
            client.query('INSERT INTO es_table (esname, usernumber, essurveynumber, esdescription, esepisode, date) VALUES($1, $2, $3, $4, $5, $6)', [request.param('esname'), request.param('usernumber'), request.param('essurveynumber'), request.param('esdescription'), request.param('esepisode'), new Date()], function(err, result) {
                done();
                if (err) {
                    console.error(err); response.send("Error " + err);
                }
                else {
                    client.query('SELECT * FROM es_table', function(err, result) {
                        done();
                        if (err) {
                            console.error(err); response.send("Error " + err);
                        } else {
                            response.render('pages/emotionalstatesurvey', {results: result.rows} );
                        }
                    });
                }
            });
        } else {
            client.query('SELECT * FROM es_table', function(err, result) {
                done();
                if (err) {
                    console.error(err); response.send("Error " + err);
                } else {
                    response.render('pages/emotionalstatesurvey', {results: result.rows} );
                }
            });
        }
    });
});
// ML - end of new app.get -- inserted on 7/1/2017

//Wendy Hartman app.get for adjustmentresponsesurvey with function to connect to postgres
app.get('/adjustmentresponsesurvey', function (request,response){
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        if (typeof request.param('arname') !='undefined') {
            // DR - Modified table and column mapping (Start)
            client.query('INSERT INTO adresp_table (arname, usernumber, arsurveynum, ardescription, argmquestion, armsquestion, arfrquestion, arbquestion ) VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [request.param('arname'), request.param('idnumber'), request.param('arsurveynum'), request.param('ardescription'), request.param('one'), request.param('two'), request.param('three'), request.param('four')], function(err, result) {
            // DR - Modified table and column mapping (Start)
                    done();
                    if (err) {
                        console.error(err); response.send("Error " + err);
                    }
                    else {
                        client.query('SELECT * FROM adresp_table', function(err, result) {
                            done();
                            if (err) {
                                console.error(err); response.send("Error " + err);
                            } else {
                                response.render('pages/adjustmentresponsesurvey', {results: result.rows} );
                            }
                        });
                    }
                });
        } else {
            client.query('SELECT * FROM adresp_table', function(err, result) {
                done();
                if (err) {
                    console.error(err); response.send("Error " + err);
                } else {
                    response.render('pages/adjustmentresponsesurvey', {results: result.rows} );
                }
            });
        }
    });
});
// Wendy Hartman - end of new app.get

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

app.get('/episodesurvey', function (request, response){
    pg.connect(process.env.DATABASE_URL, function(err, client, done){
        if (typeof request.param('title') != 'undefined'){
            // DR - Fixed mapping of table columns (Start)
            // client.query('INSERT INTO eps_table(title, location, city, country, date, user, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)', [request.param('title'), request.param('location'), request.param('city'), request.param('country'), request.param('date'), request.param('date'), request.param('user'), request.param('one'), request.param('two'), request.param('three'), request.param('four'), request.param('five'), request.param('six'), request.param('seven'), request.param('eight'), request.param('nine'), request.param('ten'), request.param('eleven'), request.param('twelve'), request.param('thirteen'), request.param('fourteen'), request.param('fifteen'), request.param('sixteen')], function (err, result){
            client.query('INSERT INTO eps_table(eptitle, eplocation, epcity, epcountry, epdate, usernumber, epq1, epq2, epq3, epq4, epq5, epq6, epq7, epq8, epq9, epq10, epq11, epq12, epq13, epq14, epq15, epq16, date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)', [request.param('title'), request.param('location'), request.param('city'), request.param('country'), request.param('date'), request.param('username'), request.param('one'), request.param('two'), request.param('three'), request.param('four'), request.param('five'), request.param('six'), request.param('seven'), request.param('eight'), request.param('nine'), request.param('ten'), request.param('eleven'), request.param('twelve'), request.param('thirteen'), request.param('fourteen'), request.param('fifteen'), request.param('sixteen'), new Date()], function (err, result){
            // DR - Fixed mapping of table columns (End)
                done();
                if (err){
                    console.error(err); response.send("Error " + err);
                }
                else {
                    client.query('SELECT * FROM eps_table', function(err, result){
                        done();
                        if (err){
                            console.error(err); response.send("Error " + err);
                        } else {
                            response.render('pages/episodesurvey', {results: result.rows} );
                        }
                    });
                }
            });
        } else {
            client.query('SELECT * FROM eps_table', function(err, result) {
                done();
                if (err){
                    console.error(err); response.send("Error " + err);
                } else {
                    response.render('pages/episodesurvey', {results: result.rows} );
                }
            });
        }
    });
});
app.get('/instructorSearch', function(request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done){
        //There are six different retrieval forms, so use if statements to determine which was executed
        if (typeof request.param('exe1') != 'undefined'){
            //Try to execute get all surveys for all respondents for the past 7 days
            client.query('SELECT * FROM test_table', function(err, result) {
                done();
                if (err) {
                    console.error(err); response.send("Error " + err);
                } else {
                    response.render('pages/instructorSearch', {results: result.rows} );
                }
            });

        } else if (typeof request.param('exe2') != 'undefined'){
            //Execute SQL-2
            response.render('pages/instructorSearch');
        } else if (typeof request.param('exe3') != 'undefined'){
            //Execute SQL-3
            response.render('pages/instructorSearch');
        } else if (typeof request.param('exe4') != 'undefined'){
            //Execute SQL-4
            response.render('pages/instructorSearch');
        } else if (typeof request.param('exe5') != 'undefined'){
            //Execute SQL-5
            response.render('pages/dblogic');
        } else if (typeof request.param('exe6') != 'undefined'){
            //Execute SQL-6
            response.render('pages/instructorSearch');
        } else {
            response.render('pages/instructorSearch');
        }
    });
});
app.get('/respondentSearch', function(request, response) {
    response.render('pages/respondentSearch');
});

//TODO: Enable post operation for database updates/inserts
var bodyParser = require('body-parser');
app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); //support encoded bodies

//TODO: Change route to /surveyreports
app.post('/surveyreportslogin', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT userrole FROM userauth_table WHERE username=$1 AND userpassword=$2', [request.body.username, request.body.password], function(err, result) {
            done();
            if (err) {
                console.error(err); response.send("Error " + err);
            } else {
                if (typeof result.rows[0] != 'undefined') {
                    if (result.rows[0].userrole == 'student') {
                        // response.send('Student');
                        response.render('pages/respondentSearch');
                    } else if (result.rows[0].userrole == 'faculty') {
                        // response.send('Faculty');
                        response.render('pages/instructorSearch');
                    } else {
                        // response.send('No Match');
                        response.render('pages/surveyreports');
                    }
                } else {
                    // response.send('Undefined');
                    response.render('pages/surveyreports');
                }
            }
        });
    });

    // var username = request.body.username;
    // var password = request.body.password;
    //
    // response.send(username + ' ' + password);
});

