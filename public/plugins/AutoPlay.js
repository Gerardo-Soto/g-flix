/*function AutoPlay(){

}

AutoPlay.prototype.run = function(player){
    //Play video
    player.play();
    player.muted = true;

}*/

class AutoPlay{
    constructor(video){
        this.player = video;
    }

    run(){
        this.player.muted = true;
        this.player.play();
    }
}

export default AutoPlay;