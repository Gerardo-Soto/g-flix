function AutoPlay(){

}

AutoPlay.prototype.run = function(player){
    player.muted = false;
    //Play video
    player.play();
}

export default AutoPlay;