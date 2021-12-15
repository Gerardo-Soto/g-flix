var video = document.querySelector('.video');
var juice = document.querySelector('.purple-juice');
var btn = document.getElementById('play-pause');
var progressBar = document.querySelector('.progress-bar');
var timeVideo = document.querySelector('.time__video');


function togglePlayPause() {
  if(video.paused){
    btn.className = "pause";
    video.play();
  } else {
    btn.className = "play";
    video.pause();
  }
}

function setProgress(e) {
  const width = this.clientWidth;
  //console.log(width);
  const clickX= e.offsetX;
  //console.log(clickX);
  const videoDuration = video.duration;
  //console.log(videoTime);
  const newTime = (clickX / width) * videoDuration;
  video.currentTime = newTime;
}


btn.onclick = function(){
  togglePlayPause();
}


video.addEventListener("timeupdate", function() {

  var juicePosition = video.currentTime / video.duration;
  juice.style.width = (juicePosition * 100) + "%";

  timeVideo.innerHTML = "Time: " + parseInt(parseInt(video.currentTime) / 60) + ":" + ("0" + parseInt(video.currentTime) % 60).slice(-2) + " / " + parseInt(parseInt(video.duration) / 60) + ":" + ("0" + parseInt(video.duration) % 60 ).slice(-2);


  if (video.ended) {
    btn.className = "play";
  }
});


progressBar.addEventListener('click', setProgress);
