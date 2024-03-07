async function GetResults() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {

        var Curiosity = document.getElementById("Curiosity").value;
        var Opprotunity = document.getElementById("Opprotunity").value;
        var apiKey = "6Mgep6mPdOgXq6eAbmitmalpCjyoOlpY"
        var Spirit = document.getElementById("Spirit").value;
        var PictureDate = document.getElementById("PictureDate").value;
    }
    function displayDate(08/06/2012) {
        document.getElementById("Curiosity").innerHTML = Date();
      }
    }
      function ClearForm() {
        document.getElementById("Curiosity").checked = false;
    document.getElementById("Opprotunity").checked = false;
    document.getElementById("Spirit").checked = false;
        document.getElementById("PictureDate").value = "";
      }