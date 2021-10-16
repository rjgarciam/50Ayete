var now = new Date();
var current_year = now.getFullYear();
var next_year = current_year + 1;
var target_date = new Date("April 23, 2022 18:00:00");
var days;
var $days = document.getElementById("d");

function update() {
    var b = new Date().getTime();
    if((target_date - b)<=0){
    	days = 0;
    }else{
    	var a = (target_date - b) / 1000;
    	days = parseInt(a / 86400)
    }
    $days.innerHTML = days;
}
update();
setInterval(update, 1000);