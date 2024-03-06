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
        var operator;
        if (document.getElementById("CentimetersOperators").checked) {
            operator = document.getElementById("CentimetersOperators").value;
        }
        if (document.getElementById("MetersOperators").checked) {
            operator = document.getElementById("MetersOperators").value;
        }
        if (document.getElementById("KilometersOperators").checked) {
            operator = document.getElementById("KilometersOperators").value;
        }
        if (document.getElementById("InchesOperators").checked) {
            operator = document.getElementById("InchesOperators").value;
        }
        if (document.getElementById("FeetOperators").checked) {
            operator = document.getElementById("FeetOperators").value;
        }
        if (document.getElementById("YardsOperators").checked) {
            operator = document.getElementById("YardsOperators").value;
        }
        if (document.getElementById("MilesOperators").checked) {
            operator = document.getElementById("MilesOperators").value;
        }

        var operator2;
        if (document.getElementById("CentimetersOperator").checked) {
            operator2 = document.getElementById("CentimetersOperator").value;
        }
        if (document.getElementById("MetersOperator").checked) {
            operator2 = document.getElementById("MetersOperator").value;
        }
        if (document.getElementById("KilometersOperator").checked) {
            operator2 = document.getElementById("KilometersOperator").value;
        }
        if (document.getElementById("InchesOperator").checked) {
            operator2 = document.getElementById("InchesOperator").value;
        }
        if (document.getElementById("FeetOperator").checked) {
            operator2 = document.getElementById("FeetOperator").value;
        }
        if (document.getElementById("YardsOperator").checked) {
            operator2 = document.getElementById("YardsOperator").value;
        }
        if (document.getElementById("MilesOperator").checked) {
            operator2 = document.getElementById("MilesOperator").value;
        }

        CalculateResult(FromValue, operator, operator2);
    }
}

async function CalculateResult(FromValue, operator, operator2) {
        
        // URL and method used with AJAX Call
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";

        /* AJAX calculator requires Operand1, Operator, and Operand2 */
        myURL = myURL + "?Operand1=" + encodeURIComponent(FromValue) + "&Operator=" + encodeURIComponent(operator) + "&Operator2=" + encodeURIComponent(operator2);

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
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand2Msg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});