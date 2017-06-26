function submitForm() {
	var x = document.forms[0];
	var txtBoxNumber = 6;   //My form has six text boxes to start for now
	var txt = "";
	var i;
	//The loop below allows for de-referencing the value of each text box
    for (i=0; i<txtBoxNumber; i++){
        txt = txt + x.elements[i].value + "<br>";
    }
	//Now the radio buttons must be handled differently
	var length;

	var radios1 = document.getElementsByName('one');
	length = radios1.length;
	for (i=0; i<length; i++) {
		if (radios1[i].checked){
			// The txt below will need to be changed to a variable for the database
			txt = txt + 'value for question 1: ' + radios1[i].value + "<br>";
		}
	}

    var radios2 = document.getElementsByName('two');
    length = radios2.length;
    for (i=0; i<length; i++) {
        if (radios2[i].checked){
        	// The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 2: ' + radios2[i].value +"<br>";
        }
    }

    var radios3 = document.getElementsByName('three');
    length = radios3.length;
    for (i=0; i<length; i++) {
        if (radios3[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 3: ' + radios3[i].value +"<br>";
        }
    }

    var radios4 = document.getElementsByName('four');
    length = radios4.length;
    for (i=0; i<length; i++) {
        if (radios4[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 4: ' + radios4[i].value +"<br>";
        }
    }

    var radios5 = document.getElementsByName('five');
    length = radios5.length;
    for (i=0; i<length; i++) {
        if (radios5[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 5: ' + radios5[i].value +"<br>";
        }
    }

    var radios6 = document.getElementsByName('six');
    length = radios6.length;
    for (i=0; i<length; i++) {
        if (radios6[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 6: ' + radios6[i].value +"<br>";
        }
    }

    var radios7 = document.getElementsByName('seven');
    length = radios7.length;
    for (i=0; i<length; i++) {
        if (radios7[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 7: ' + radios7[i].value +"<br>";
        }
    }

    var radios8 = document.getElementsByName('eight');
    length = radios8.length;
    for (i=0; i<length; i++) {
        if (radios8[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 8: ' + radios8[i].value +"<br>";
        }
    }

    var radios9 = document.getElementsByName('nine');
    length = radios9.length;
    for (i=0; i<length; i++) {
        if (radios9[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 9: ' + radios9[i].value +"<br>";
        }
    }

    var radios10 = document.getElementsByName('ten');
    length = radios10.length;
    for (i=0; i<length; i++) {
        if (radios10[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 10: ' + radios10[i].value +"<br>";
        }
    }

    var radios11 = document.getElementsByName('eleven');
    length = radios11.length;
    for (i=0; i<length; i++) {
        if (radios11[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 11: ' + radios11[i].value +"<br>";
        }
    }

    var radios12 = document.getElementsByName('twelve');
    length = radios12.length;
    for (i=0; i<length; i++) {
        if (radios12[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 12: ' + radios12[i].value +"<br>";
        }
    }

    var radios13 = document.getElementsByName('thirteen');
    length = radios13.length;
    for (i=0; i<length; i++) {
        if (radios13[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 13: ' + radios13[i].value +"<br>";
        }
    }

    var radios14 = document.getElementsByName('fourteen');
    length = radios14.length;
    for (i=0; i<length; i++) {
        if (radios14[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 14: ' + radios14[i].value +"<br>";
        }
    }

    var radios15 = document.getElementsByName('fifteen');
    length = radios15.length;
    for (i=0; i<length; i++) {
        if (radios15[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 15: ' + radios15[i].value +"<br>";
        }
    }

    var radios16 = document.getElementsByName('sixteen');
    length = radios16.length;
    for (i=0; i<length; i++) {
        if (radios16[i].checked){
            // The txt below will need to be changed to a variable for the database
            txt = txt + 'value for question 16: ' + radios16[i].value +"<br>";
        }
    }



    document.write(txt);   //I just chose this to see the output this will be deleted eventually
}

//At this point, the form has been read and values retrieved to assign to variables that can
// be used to populate the database INSERT statements that Diego wrote.