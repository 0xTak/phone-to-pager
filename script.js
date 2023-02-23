const pagerDisplayEl = document.getElementById("pagerDisplay")
const phoneDisplayEl = document.getElementById("phoneDisplay")

const resetBtn = document.getElementById("reset")
const sendBtn = document.getElementById("send") 
const sendSound = document.getElementById("send-sound");

const animationBarEl = document.getElementById("animation-bar");
const audio = new Audio("supermario.mp3");

function key1Pressed() {
    phoneDisplayEl.innerText += "1"
}

function key2Pressed() {
    phoneDisplayEl.innerText += "2"
}

function key3Pressed() {
    phoneDisplayEl.innerText += "3"
}

function key4Pressed() {
    phoneDisplayEl.innerText += "4"
}

function key5Pressed() {
    phoneDisplayEl.innerText += "5"
}

function key6Pressed() {
    phoneDisplayEl.innerText += "6"
}

function key7Pressed() {
    phoneDisplayEl.innerText += "7"
}

function key8Pressed() {
    phoneDisplayEl.innerText += "8"
}

function key9Pressed() {
    phoneDisplayEl.innerText += "9"
}

function keyAsteriskPressed() {
    phoneDisplayEl.innerText += "*"
}

function key0Pressed() {
    phoneDisplayEl.innerText += "0"
}

function keyPoundPressed() {
    phoneDisplayEl.innerText += "#"
}


resetBtn.addEventListener("click", function() {
    phoneDisplayEl.innerText = "";
    pagerDisplayEl.innerText = "";
    animationBarEl.style.width = "100%";
    animationBarEl.style.animation = 'none';
    audio.pause();
    audio.currentTime = 0;
}) 

sendBtn.addEventListener("click", function () {
    audio.play();
    animationBarEl.style.animation = 'progress-animation 7100ms forwards';
    setTimeout(function () {
        animationBarEl.classList.remove("animate");
        pagerDisplayEl.innerText = phoneDisplayEl.innerText;
      }, 7100);
});
