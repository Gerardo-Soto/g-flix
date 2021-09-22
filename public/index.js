
import MediaPlayer from './MediaPlayer.js';

// Get elements from DOM
const video = document.querySelector("video");
const btnPlay = document.querySelector("button");


const player = new MediaPlayer({el: video});
btnPlay.onclick = () => player.togglePlay();