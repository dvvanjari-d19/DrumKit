function handleClick() {
  makeSound(this.innerHTML);
  animateButton(this.innerHTML);
}

function makeSound(key) {
  let audioPlayer;

  switch (key) {
    case 'w':
      audioPlayer = new Audio("sounds/tom-1.mp3");
      audioPlayer.play();
      break;
    case 'a':
      audioPlayer = new Audio("sounds/tom-2.mp3");
      audioPlayer.play();
      break;
    case 's':
      audioPlayer = new Audio("sounds/tom-3.mp3");
      audioPlayer.play();
      break;
    case 'd':
      audioPlayer = new Audio("sounds/tom-4.mp3");
      audioPlayer.play();
      break;
    case 'j':
      audioPlayer = new Audio("sounds/snare.mp3");
      audioPlayer.play();
      break;
    case 'k':
      audioPlayer = new Audio("sounds/crash.mp3");
      audioPlayer.play();
      break;
    case 'l':
      audioPlayer = new Audio("sounds/kick-bass.mp3");
      audioPlayer.play();
      break;

    default:
      console.log(this.innerHTML);
  }
}

function animateButton(key) {
  if (key === ' ') {
    return false;
  }
  
  let activeButton = document.querySelector("." + key);

  if (activeButton === null) {
    return false;
  }

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

let drumButtons = document.querySelectorAll(".drum");
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  animateButton(event.key);
})
