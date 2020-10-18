function countDownTime() {
  var duration = 0.5 * 60; // convert minutes into seconds
  var counter = setInterval(function() {
    var currentDate = new Date().getTime();
    var finalDate = new Date(currentDate);
    finalDate.setMinutes(finalDate.getMinutes() + duration * 60);

    var hour = Math.floor((duration % (60 * 60 * 24)) / (60 * 60));
    var minute = Math.floor((duration % (60 * 60)) / 60);
    var second = Math.floor(duration % 60);
    console.log("timer works");
    duration--;

    function sound() {
      this.sound = document.createElement("audio");
      this.sound.src = "./meditation.mp3";
      this.sound.setAttribute("preload", "auto");
      this.sound.setAttribute("controls", "none");
      this.sound.style.display = "none";
      this.play = function() {
        this.sound.play();
      };
      this.stop = this.sound.pause();
    }
    if (duration <= 0) {
      console.log("timer works");

      sound.play();
      setTimeout(sound.stop(), 20000);
      // sound.stop();
      clearInterval(counter);
    }
  }, 1000);
}
