var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
var img = new Image();

img.addEventListener('load', function() {
    var frameIndex = -1;
    var direction = 4;
    var x = 0;
    var y = 0;
    setInterval(function() {
        ctx.clearRect(0, 0, 1000, 500);
        frameIndex = (frameIndex + 1) % 8;
        x = x + 5;
        ctx.drawImage(img,
            256 * frameIndex, 256 * direction, 256, 256,
            x, y, 256, 256)
    }, 100)
})