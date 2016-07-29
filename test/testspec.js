var should = require('chai').should(),
    amazonRemote = require('../index');

describe('Amazon Remote Controller', function() {
    it('user hits back from remote', function() {
        amazonRemote.isBack({keyCode:8}).should.equal(true);
        amazonRemote.isBack({keyCode:1}).should.equal(false);
        amazonRemote.isBack({keyCode:27}).should.equal(true);
    });

    it('user hits play/pause from remote', function() {
        amazonRemote.isPlayPause({keyCode:80}).should.equal(true);
        amazonRemote.isPlayPause({keyCode:1}).should.equal(false);
        amazonRemote.isPlayPause({keyCode:179}).should.equal(true);
    });

    it('user hits rewind from remote', function() {
        amazonRemote.isRewind({keyCode:82}).should.equal(true);
        amazonRemote.isRewind({keyCode:1}).should.equal(false);
        amazonRemote.isRewind({keyCode:227}).should.equal(true);
    });

    it('user hits fast-forward from remote', function() {
        amazonRemote.isFastForward({keyCode:70}).should.equal(true);
        amazonRemote.isFastForward({keyCode:1}).should.equal(false);
        amazonRemote.isFastForward({keyCode:228}).should.equal(true);
    });

    it('user hits Enter from remote', function() {
        amazonRemote.isEnter({code:'Enter'}).should.equal(true);
        amazonRemote.isEnter({keyIdentifier:'Enter'}).should.equal(true);
        amazonRemote.isEnter({charCode:13}).should.equal(true);
    });

    it('user hits Left arrow from remote', function() {
        amazonRemote.isLeft({code:'ArrowLeft'}).should.equal(true);
        amazonRemote.isLeft({keyIdentifier:'Left'}).should.equal(true);
        amazonRemote.isLeft({charCode:13}).should.equal(false);
    });

    it('user hits Right arrow from remote', function() {
        amazonRemote.isRight({code:'ArrowRight'}).should.equal(true);
        amazonRemote.isRight({keyIdentifier:'Right'}).should.equal(true);
        amazonRemote.isRight({charCode:13}).should.equal(false);
    });

    it('user hits Down arrow from remote', function() {
        amazonRemote.isDown({code:'ArrowDown'}).should.equal(true);
        amazonRemote.isDown({keyIdentifier:'Down'}).should.equal(true);
        amazonRemote.isDown({charCode:13}).should.equal(false);
    });

    it('user hits Up arrow from remote', function() {
        amazonRemote.isUp({code:'ArrowUp'}).should.equal(true);
        amazonRemote.isUp({keyIdentifier:'Up'}).should.equal(true);
        amazonRemote.isUp({charCode:13}).should.equal(false);
    });

});