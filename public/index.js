
import MediaPlayer from './MediaPlayer.js';
// Fix issue of autoplay whit a plugin:
import AutoPlay from './plugins/AutoPlay.js'

// Get elements from DOM
const video = document.querySelector("video");
const btnPlay = document.querySelector("button");


const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay],
});
btnPlay.onclick = () => player.togglePlay();