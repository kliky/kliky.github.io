//todo

$(document).ready(function() {
	var num = 0;
	$('#clickThis').click(function() {
		
        if(num == 0){
        var time = 60, //in seconds
            display = $('#time'),
            button = $('#startAndStop');
        startTimer(time, display, button);
        }
        num += 1;
		$('#number').html(function(i, val) {
			return +val+1
		});
	})

});

//TIMER 
function startTimer(duration, display, button) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if(seconds == 01){
			display.text("TIME UP!");
            button.text("PLAY AGAIN!");
            timer.stop();
        }
        else{
        	display.text("You have " + minutes + ":" + seconds + " seconds!");
        }
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
