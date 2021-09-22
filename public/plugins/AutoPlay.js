function AutoPlay(){

}

AutoPlay.prototype.run = function(player){
    //Play video
    player.play();
    player.muted = true;

}

export default AutoPlay;