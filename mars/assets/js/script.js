function GetCuriosity() {
  document.getElementById("PictureDate").value = "2012-08-06";
}

function GetOpprotunity() {
  document.getElementById("PictureDate").value = "2004-01-26";
}

function GetSpirit() {
  document.getElementById("PictureDate").value = "2004-01-05";
}
async function GetPictures() {
  "use strict";

  // Get a reference to the form - Use the ID of the form
  var form = $("#myform");
  
  // Validate all of the form elements
  form.validate();
  
  // If all of the form elements are valid, the get the form values
  if (form.valid()) {
          
    var Rover;
    if (document.getElementById("Curiosity").checked) {
        Rover = document.getElementById("Curiosity").value;
    }
    if (document.getElementById("Opprotunity").checked) {
        Rover = document.getElementById("Opprotunity").value;
    }
    if (document.getElementById("Spirit").checked) {
        Rover = document.getElementById("Spirit").value;
    }
    var PictureDate = document.getElementById("PictureDate").value;
    var apiKey = "JVjFYadADtuLdgHPWgnztRfLfI4Zf30ggnMJqQ3Y";

        /* URL for AJAX Call */
        var myURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + Rover + "/photos?earth_date=" + PictureDate + "&api_key=" + apiKey;
          
        /* Make AJAX Call */
        let PictureObject = await fetch(myURL2);
        let Result = await PictureObject.text();
        let msg =JSON.parse(Result); 
        document.getElementById("numberofphotos").innerHTML = msg.photos.length + " pictures found"
           if (numberofphotos > 25)
           {numberofphotos = 25}
                
            for (let i = 0; i < 25; i++) {
            document.getElementById("image" + i).src = msg.photos[i].img_src;
            document.getElementById("image" + i).style.visibility = "visible";
            document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
            }
  }
        let PictureObject = await fetch(myURL2);
        let Result = await PictureObject.text();
        let msg =JSON.parse(Result); 
        document.getElementById("numberofphotos").innerHTML = msg.photos.length + " pictures found"
           if (numberofphotos >25)
           {numberofphotos = 25}
                
            for (let i = 0; i < 25; i++) {
            document.getElementById("href" + i).href = msg.photos[i].img_src;
            }           
}
function ClearForm() {
  document.getElementById("Curiosity").checked = false;
  document.getElementById("Opprotunity").checked = false;
  document.getElementById("Spirit").checked = false;
  document.getElementById("PictureDate").value = "";
  document.getElementById("numberofphotos").innerHTML = "";
  document.getElementById("error").innerHTML = "";
}