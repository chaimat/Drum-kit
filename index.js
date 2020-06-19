// DETECTING MOUSE CLICK

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    switchAudio(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// DETECING KEYDOWN

document.addEventListener("keydown", function(event) {
  switchAudio(event.key);
  buttonAnimation(event.key);
});

// FUCNTION TO PLAY AUDIO

function switchAudio(key){
  switch(key){
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
  }
}

//BUTTON ANIMATION FUNCTION

function buttonAnimation(currentKey){
  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function(){
  document.querySelector("." + currentKey).classList.remove("pressed");
}, 100);
}
