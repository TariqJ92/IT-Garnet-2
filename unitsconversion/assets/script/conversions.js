function calculate() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $( "#myform" );
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Operand 1
        var FromValue = document.getElementById("FromValue").value;

        // Operator
        // Get the value associated with the operator that was checked
        var FromUnit;
        if (document.getElementById("CentimetersOperators").checked) {
            FromUnit = document.getElementById("CentimetersOperators").value;
        }
        if (document.getElementById("MetersOperators").checked) {
            FromUnit = document.getElementById("MetersOperators").value;
        }
        if (document.getElementById("KilometersOperators").checked) {
            FromUnit = document.getElementById("KilometersOperators").value;
        }
        if (document.getElementById("InchesOperators").checked) {
            FromUnit = document.getElementById("InchesOperators").value;
        }
        if (document.getElementById("FeetOperators").checked) {
            FromUnit = document.getElementById("FeetOperators").value;
        }
        if (document.getElementById("YardsOperators").checked) {
            FromUnit = document.getElementById("YardsOperators").value;
        }
        if (document.getElementById("MilesOperators").checked) {
            FromUnit = document.getElementById("MilesOperators").value;
        }

        var ToUnit;
        if (document.getElementById("CentimetersOperator").checked) {
            ToUnit = document.getElementById("CentimetersOperator").value;
        }
        if (document.getElementById("MetersOperator").checked) {
            ToUnit = document.getElementById("MetersOperator").value;
        }
        if (document.getElementById("KilometersOperator").checked) {
            ToUnit = document.getElementById("KilometersOperator").value;
        }
        if (document.getElementById("InchesOperator").checked) {
            ToUnit = document.getElementById("InchesOperator").value;
        }
        if (document.getElementById("FeetOperator").checked) {
            ToUnit = document.getElementById("FeetOperator").value;
        }
        if (document.getElementById("YardsOperator").checked) {
            ToUnit = document.getElementById("YardsOperator").value;
        }
        if (document.getElementById("MilesOperator").checked) {
            ToUnit = document.getElementById("MilesOperator").value;
        }

        CalculateResult(FromValue, FromUnit, ToUnit);
    }
}

async function CalculateResult(FromValue, FromUnit, ToUnit) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?FromValue=" + encodeURIComponent(FromValue) + "&FromUnit=" + encodeURIComponent(FromUnit) + "&ToUnit=" + encodeURIComponent(ToUnit);

        /* fetch the results */
        let myCalcObject = await fetch(myURL);
        let myResult = await myCalcObject.text();
        
        document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromValue").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("CentimetersOperators").checked = false;
    document.getElementById("MetersOperators").checked = false;
    document.getElementById("KilometersOperators").checked = false;
    document.getElementById("InchesOperators").checked = false;
    document.getElementById("FeetOperators").checked = false;
    document.getElementById("YardsOperators").checked = false;
    document.getElementById("MilesOperators").checked = false;
    document.getElementById("CentimetersOperator").checked = false;
    document.getElementById("MetersOperator").checked = false;
    document.getElementById("KilometersOperator").checked = false;
    document.getElementById("InchesOperator").checked = false;
    document.getElementById("FeetOperator").checked = false;
    document.getElementById("YardsOperator").checked = false;
    document.getElementById("MilesOperator").checked = false;
    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

//$( "#myform" ).validate({

//});