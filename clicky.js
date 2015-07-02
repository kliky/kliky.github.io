//todo

$(document).ready(function() {
	var num = 0;
	$('#clickThis').click(function() {
		
        if(num < 1){
            var time = 6, //in seconds
                display = $('#time'),
                button = $('#startAndStop');
        
            var status =  startTimer(time, display, button, num);
        }
        num += 1;
		$('#number').html(function(i, val) {
			return +val+1
		});
	})

});

//TIMER 
function startTimer(duration, display, button, num) {
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
            num = 0;
            return 1
        }
        else{
        	display.text("You have " + minutes + ":" + seconds + " seconds!");
        }
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
