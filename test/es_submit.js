/**
 * Created by mikelycette on 6/30/17.
 */

//6/30/17 - ML
// testing a submit script for the emotional state survey
    //attempts to create connection, gather info from page by id, then insert to db


            var db=require('postgres');

            var con = db.createConnection({
                host: “ec2-184-73-236-170.compute-1.amazonaws.com”,
                user: “lfagypvtrbfapj”.
                password: “3e9d6437511245f132fbc118712076279815af058424bf8375ba575b1f736481”,
                database: “d7b08angkmth1h”,
                });

            function buttonClicked() {


            con.connect(function(err) {
                if (err) throw err;
                window.alert("Connected!");

                var 1 = emotionalstatesurvey.getElementById('name');
                var 2 = emotionalstatesurvey.getElementById('IDNumber');
                var 3 = emotionalstatesurvey.getElementById('surveynumber');
                var 4 = emotionalstatesurvey.getElementById('description');
                var 5 = emotionalstatesurvey.getElementById('ESmessage');

                var sql = "INSERT INTO ES_table (ESname, ESIDnumber, ESsurveynumber, ESdescription, ESmessage)" VALUES (1, 2, 3, 4, 5);
                con.query(sql,function (err, result) {
                 if (err) throw err;
                 window.confirm("I might have done something");
                });
            });
            }



