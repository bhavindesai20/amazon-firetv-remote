module.exports = {
    isUp: function (event) {
        return event.code === 'ArrowUp' || event.keyIdentifier === 'Up';
    },
    isDown: function (event) {
        return event.code === 'ArrowDown' || event.keyIdentifier === 'Down';
    },
    isRight: function (event) {
        return event.code === 'ArrowRight' || event.keyIdentifier === 'Right';
    },
    isLeft: function (event) {
        return event.code === 'ArrowLeft' || event.keyIdentifier === 'Left';
    },
    isEnter: function (event) {
        return event.code === 'Enter' || event.keyIdentifier === 'Enter' || event.charCode === 13;
    },
    isRewind: function (event) {
        return event.keyCode === 82 || event.keyCode === 227;
    },
    isFastForward: function (event) {
        return event.keyCode === 70 || event.keyCode === 228;
    },
    isPlayPause: function (event) {
        return event.keyCode === 80 || event.keyCode === 179;
    },
    isBack: function (event) {
        return event.keyCode === 8 || event.keyCode === 27 || event.code === 'Backspace';
    }
};