var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
var img = new Image();

img.addEventListener('load', function() {
    var frameIndex = -1;
    var direction = 4;
    var x = 0;
    var y = 0;
    var waitTime = 0;
    setInterval(function() {
        ctx.clearRect(0, 0, 1000, 500);
        waitTime = waitTime + 16.77;
        if (waitTime > 100) {
            frameIndex = (frameIndex + 1) % 8;
            waitTime = waitTime - 100;
        }
        x = x + 1;
        ctx.drawImage(img,
            256 * frameIndex, 256 * direction, 256, 256,
            x, y, 256, 256)
    }, 1000 / 60)
})

img.src = 'estill.jpg'