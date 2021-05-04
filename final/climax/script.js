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
    var timeleft = 3;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown1").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown1").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction() {
  setTimeout(function(){ alert("Time for the rising action"); }, 3100);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown1").style.background = "black";
document.getElementById("countdown1").style.color = "lime";
document.getElementById("countdown1").style.borderRadius = "5px";
document.getElementById("countdown1").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";





// button2 from here

document.getElementById("btn2").addEventListener("click", function(){
    var timeleft = 90;

    var downloadTimer = setInterval(function function2(){
    document.getElementById("countdown2").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown2").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction2() {
  setTimeout(function(){ alert("Time for the rising action!"); }, 9100);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown2").style.background = "black";
document.getElementById("countdown2").style.color = "lime";
document.getElementById("countdown2").style.borderRadius = "5px";
document.getElementById("countdown2").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button3 from here

document.getElementById("btn3").addEventListener("click", function(){
    var timeleft = 90;

    var downloadTimer = setInterval(function function3(){
    document.getElementById("countdown2").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown2").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction3() {
  setTimeout(function(){ alert("Time for the climax!"); }, 91000);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown2").style.background = "black";
document.getElementById("countdown2").style.color = "lime";
document.getElementById("countdown2").style.borderRadius = "5px";
document.getElementById("countdown2").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button4 from here

document.getElementById("btn4").addEventListener("click", function(){
    var timeleft = 90;

    var downloadTimer = setInterval(function function4(){
    document.getElementById("countdown2").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown2").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction4() {
  setTimeout(function(){ alert("Time for the climax!"); }, 91000);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown2").style.background = "black";
document.getElementById("countdown2").style.color = "lime";
document.getElementById("countdown2").style.borderRadius = "5px";
document.getElementById("countdown2").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button5 from here

document.getElementById("btn5").addEventListener("click", function(){
    var timeleft = 90;

    var downloadTimer = setInterval(function function5(){
    document.getElementById("countdown2").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown2").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction5() {
  setTimeout(function(){ alert("Time for the climax!"); }, 91000);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown2").style.background = "black";
document.getElementById("countdown2").style.color = "lime";
document.getElementById("countdown2").style.borderRadius = "5px";
document.getElementById("countdown2").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button6 from here

document.getElementById("btn6").addEventListener("click", function(){
    var timeleft = 90;

    var downloadTimer = setInterval(function function6(){
    document.getElementById("countdown2").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown2").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction6() {
  setTimeout(function(){ alert("Time for the climax!"); }, 91000);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown2").style.background = "black";
document.getElementById("countdown2").style.color = "lime";
document.getElementById("countdown2").style.borderRadius = "5px";
document.getElementById("countdown2").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button7 from here

document.getElementById("btn7").addEventListener("click", function(){
    var timeleft = 90;

    var downloadTimer = setInterval(function function7(){
    document.getElementById("countdown2").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown2").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction7() {
  setTimeout(function(){ alert("Time for the climax!"); }, 91000);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown2").style.background = "black";
document.getElementById("countdown2").style.color = "lime";
document.getElementById("countdown2").style.borderRadius = "5px";
document.getElementById("countdown2").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button8 from here

document.getElementById("btn8").addEventListener("click", function(){
    var timeleft = 90;

    var downloadTimer = setInterval(function function8(){
    document.getElementById("countdown2").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown2").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction8() {
  setTimeout(function(){ alert("Time for the climax!"); }, 91000);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown2").style.background = "black";
document.getElementById("countdown2").style.color = "lime";
document.getElementById("countdown2").style.borderRadius = "5px";
document.getElementById("countdown2").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";
