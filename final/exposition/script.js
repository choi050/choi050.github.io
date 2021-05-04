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
    var timeleft = 180;

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
  setTimeout(function(){ alert("Time for the rising action"); }, 180100);

  var element = document.getElementById("activate");
  element.classList.add("active");
}

document.getElementById("countdown1").style.background = "black";
document.getElementById("countdown1").style.color = "lime";
document.getElementById("countdown1").style.borderRadius = "5px";
document.getElementById("countdown1").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button2 from here

document.getElementById("btn2").addEventListener("click", function(){
    var timeleft = 3;

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
  setTimeout(function(){ alert("Time for the rising action!"); }, 3100);

  var element = document.getElementById("activate2");
  element.classList.add("active");
}

document.getElementById("countdown2").style.background = "black";
document.getElementById("countdown2").style.color = "lime";
document.getElementById("countdown2").style.borderRadius = "5px";
document.getElementById("countdown2").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button 3 from here
document.getElementById("btn3").addEventListener("click", function(){
    var timeleft = 180;

    var downloadTimer = setInterval(function function3(){
    document.getElementById("countdown3").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown3").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction3() {
  setTimeout(function(){ alert("Time for the rising action"); }, 180100);

  var element = document.getElementById("activate3");
  element.classList.add("active");
}

document.getElementById("countdown3").style.background = "black";
document.getElementById("countdown3").style.color = "lime";
document.getElementById("countdown3").style.borderRadius = "5px";
document.getElementById("countdown3").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button 4 from here
document.getElementById("btn4").addEventListener("click", function(){
    var timeleft = 180;

    var downloadTimer = setInterval(function function4(){
    document.getElementById("countdown4").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown4").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction4() {
  setTimeout(function(){ alert("Time for the rising action"); }, 180100);

  var element = document.getElementById("activate4");
  element.classList.add("active");
}

document.getElementById("countdown4").style.background = "black";
document.getElementById("countdown4").style.color = "lime";
document.getElementById("countdown4").style.borderRadius = "5px";
document.getElementById("countdown4").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button 5 from here
document.getElementById("btn5").addEventListener("click", function(){
    var timeleft = 180;

    var downloadTimer = setInterval(function function5(){
    document.getElementById("countdown5").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown5").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction5() {
  setTimeout(function(){ alert("Time for the rising action"); }, 180100);

  var element = document.getElementById("activate5");
  element.classList.add("active");
}

document.getElementById("countdown5").style.background = "black";
document.getElementById("countdown5").style.color = "lime";
document.getElementById("countdown5").style.borderRadius = "5px";
document.getElementById("countdown5").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button 6 from here
document.getElementById("btn6").addEventListener("click", function(){
    var timeleft = 180;

    var downloadTimer = setInterval(function function5(){
    document.getElementById("countdown6").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown6").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction6() {
  setTimeout(function(){ alert("Time for the rising action"); }, 180100);

  var element = document.getElementById("activate6");
  element.classList.add("active");
}

document.getElementById("countdown6").style.background = "black";
document.getElementById("countdown6").style.color = "lime";
document.getElementById("countdown6").style.borderRadius = "5px";
document.getElementById("countdown6").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button 7 from here
document.getElementById("btn7").addEventListener("click", function(){
    var timeleft = 180;

    var downloadTimer = setInterval(function function7(){
    document.getElementById("countdown7").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown7").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction7() {
  setTimeout(function(){ alert("Time for the rising action"); }, 180100);

  var element = document.getElementById("activate7");
  element.classList.add("active");
}

document.getElementById("countdown7").style.background = "black";
document.getElementById("countdown7").style.color = "lime";
document.getElementById("countdown7").style.borderRadius = "5px";
document.getElementById("countdown7").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button 8 from here
document.getElementById("btn8").addEventListener("click", function(){
    var timeleft = 180;

    var downloadTimer = setInterval(function function8(){
    document.getElementById("countdown8").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown8").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction8() {
  setTimeout(function(){ alert("Time for the rising action"); }, 180100);

  var element = document.getElementById("activate8");
  element.classList.add("active");
}

document.getElementById("countdown8").style.background = "black";
document.getElementById("countdown8").style.color = "lime";
document.getElementById("countdown8").style.borderRadius = "5px";
document.getElementById("countdown8").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button 9 from here
document.getElementById("btn9").addEventListener("click", function(){
    var timeleft = 180;

    var downloadTimer = setInterval(function function9(){
    document.getElementById("countdown9").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown9").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction9() {
  setTimeout(function(){ alert("Time for the rising action"); }, 180100);

  var element = document.getElementById("activate9");
  element.classList.add("active");
}

document.getElementById("countdown9").style.background = "black";
document.getElementById("countdown9").style.color = "lime";
document.getElementById("countdown9").style.borderRadius = "5px";
document.getElementById("countdown9").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";

// button 10 from here
document.getElementById("btn10").addEventListener("click", function(){
    var timeleft = 180;

    var downloadTimer = setInterval(function function10(){
    document.getElementById("countdown10").innerHTML = timeleft +
    "&nbsp"+"seconds to rising action";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown10").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

function myFunction10() {
  setTimeout(function(){ alert("Time for the rising action"); }, 180100);

  var element = document.getElementById("activate10");
  element.classList.add("active");
}

document.getElementById("countdown10").style.background = "black";
document.getElementById("countdown10").style.color = "lime";
document.getElementById("countdown10").style.borderRadius = "5px";
document.getElementById("countdown10").style.boxShadow = "-1px -1px 1px #000, 1px 1px 1px #fff";
