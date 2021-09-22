function AutoPlay(){

}

AutoPlay.prototype.run = function(player){
    player.muted();
    //Play video
    player.play();
}

export default AutoPlay;