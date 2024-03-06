$( "#CircleForm" ).validate({

});

function displaydiameter() {
    if ($("#CircleForm").valid()) {
        document.getElementById("diameter").innerHTML = "";

        var radius;
        var radiusfp;
        var diameter;
        var circumference;
        var result;

        radius = document.getElementById("radius").value;

        radiusfp = parseFloat( radius );

        diameter = calcDiameter(radiusfp)
        circumference = calcCircumference(radiusfp)
        area = calcArea(radiusfp)

        document.getElementById("diameter").innerHTML = diameter.toString();
        document.getElementById("circumference").innerHTML = circumference.toString();
        document.getElementById("area").innerHTML = area.toString();
    }
}

function calcDiameter (radiusvalue){
    return radiusvalue * 2;
}

function calcCircumference (radiusvalue) {
    return 2 * Math.PI * radiusvalue
}

function calcArea (radiusvalue) {
    return Math.PI * radiusvalue *radiusvalue
}

function clearform() 
{
    document.getElementById("radius").value = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}
