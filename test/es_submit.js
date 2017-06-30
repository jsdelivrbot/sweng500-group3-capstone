/**
 * Created by mikelycette on 6/30/17.
 */

//6/30/17 - ML
// testing a submit script for the emotional state survey


            var db=require('postgres');

            var con = db.createConnection({
                host: “ec2-184-73-236-170.compute-1.amazonaws.com”,
                user: “lfagypvtrbfapj”.
                password: “3e9d6437511245f132fbc118712076279815af058424bf8375ba575b1f736481”,
                database: “d7b08angkmth1h”,
                });

            con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = "INSERT INTO ES_table (ESname, ESIDnumber, ESsurveynumber, ESdescription, ESmessage)";
                con.query(sql,function (err, result) {
                 if (err) thow err;
                 console.log("1 record inseted");
                });
            });


