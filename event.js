var i = 0;
var txt = 'Merry Christmas CEO Trung Hieu Mai';
var speed = 50;

function typeWriter() {
    console.log(document.getElementsByClassName("glow"))
    if (i < txt.length) {
        document.getElementsByClassName("glow")[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        
    }
    document.getElementsByClassName("bn")[0].style.display="none";
    var audio = document.getElementById("audio");
    audio.play();
    setTimeout(function(){ document.getElementsByClassName("first")[0].style.display="block"}, 4000);
}

