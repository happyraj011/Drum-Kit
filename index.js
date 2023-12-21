var up = document.querySelectorAll(".drum").length;

for (var i = 0; i < up; i++) {
     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
     var button = this.innerHTML; 
     makesound(button);
     buttonanimation(button);
     
});
}


document.addEventListener("keydown", function (event) {
makesound(event.key);
buttonanimation(event.key);
}); 


function makesound(key){
     switch (key) {
          case "w":
               var audio = new Audio("tom-1.mp3");
               audio.play();
               break;

          case "a":
               var audio = new Audio("tom-1.mp3");
               audio.play();
               break;


          case "s":
               var audio = new Audio("tom-1.mp3");
               audio.play();
               break;


          case "d":
               var audio = new Audio("tom-1.mp3");
               audio.play();
               break;


          case "j":
               var audio = new Audio("tom-2.mp3");
               audio.play();
               break;

          case "k":
               var audio = new Audio("tom-3.mp3");
               audio.play();
               break;

          case "l":
               var audio = new Audio("tom-4.mp3");
               audio.play();
               break;


          default:
               break;
     }
}



