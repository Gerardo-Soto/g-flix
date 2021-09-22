function MediaPlayer(config) {
    this.media = config.el;
    // receive PlugIns || nothing:
    this.plugins = config.plugins || [];
    // Load and initialize plugins with a prototype:
    this._initPlugins()
}

MediaPlayer.prototype.play = function () {
    this.media.play();
};

MediaPlayer.prototype.pause = function () {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused){
        this.media.play();
    } else {
        this.media.pause();
    }
};

MediaPlayer.prototype._initPlugins = function (){
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.mute = function(){
    this.media.mute = true;
}

MediaPlayer.prototype.unmute = function(){
    this.media.unmute = false;
}

export default MediaPlayer;