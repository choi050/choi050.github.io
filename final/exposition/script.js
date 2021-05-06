// linking sounds to the buttons
$('.play').click(function(){
    var $this = $(this);
    var id = $this.attr('id').replace(/btn/, '');
    $this.toggleClass('active');
    if($this.hasClass('active')){
        $this.text('');
        $('audio[id^="sound"]')[id-1].play();
    } else {
        $this.text('');
        $('audio[id^="sound"]')[id-1].pause();
    }
});

//button 1 stuff

document.getElementById("btn1").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction() {
  setTimeout(function(){ alert("Time for the action to rise!"); }, 5100);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown").style.background = "black";
document.getElementById("countdown").style.color = "#F0F0A1";
document.getElementById("countdown").style.borderRadius = "50%";
document.getElementById("countdown").style.width = "50px";
document.getElementById("countdown").style.fontFamily = "Helvetica";

// button2 from here

document.getElementById("btn2").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function2(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button3 from here

document.getElementById("btn3").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function3(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button4 from here

document.getElementById("btn4").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function4(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button5 from here

document.getElementById("btn5").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function5(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button6 from here

document.getElementById("btn6").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function6(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button7 from here

document.getElementById("btn7").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function7(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button8 from here

document.getElementById("btn8").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function8(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button9 from here

document.getElementById("btn9").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function9(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button10 from here

document.getElementById("btn10").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function10(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button11 from here

document.getElementById("btn11").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function11(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button 12 from here

document.getElementById("btn12").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function12(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button13 from here

document.getElementById("btn13").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function13(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});

// button14 from here

document.getElementById("btn14").addEventListener("click", function(){
    var timeleft = 5;

    var downloadTimer = setInterval(function function14(){
    document.getElementById("countdown").innerHTML = timeleft +
    "&nbsp";

    timeleft -= 1;
    if(timeleft < 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "✓"
    }
    }, 1000);

    console.log(countdown);
});
