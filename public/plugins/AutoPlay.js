function AutoPlay(){

}

AutoPlay.prototype.run = function(){
    player.mute();
    //Play video
    player.play();
}

export default AutoPlay;