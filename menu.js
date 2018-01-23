var timeSlider = document.getElementById("timeRange");
var time = document.getElementById("time-display");
time.innerHTML = timeSlider.value; // Display the default slider value


timeSlider.oninput = function() {
    time.innerHTML = this.value;
}


var distanceSlider = document.getElementById("mileRange");
var distance = document.getElementById("distance-display");
distance.innerHTML = distanceSlider.value; // Display the default slider value


distanceSlider.oninput = function() {
    distance.innerHTML = this.value;
}

var complexitySlider = document.getElementById("complexityRange");
var complexity = document.getElementById("complexity-display");
complexity.innerHTML = complexitySlider.value; // Display the default slider value


complexitySlider.oninput = function() {
    complexity.innerHTML = this.value;
}
