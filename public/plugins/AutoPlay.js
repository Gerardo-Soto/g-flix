function AutoPlay(){

}

AutoPlay.prototype.run = function(player){
    player.muted = true;
    //Play video
    player.play();
}

export default AutoPlay;