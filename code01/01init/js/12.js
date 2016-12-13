var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
var imgElem = document.getElementById('img');
var changeDirection;
imgElem.addEventListener('load', function() {
    function Sprite(frameIndex, direction, x, y, w, h) {
        this.frameIndex = frameIndex; // 当前播放到第几帧
        this.direction = direction; // 当前的朝向（取第几行的图像）
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 1;
        this.waitTime = 0;
    }
    Sprite.prototype.draw = function() {
        ctx.drawImage(imgElem,
            256 * this.frameIndex, 256 * this.direction, 256, 256,
            this.x, this.y, this.w, this.h)
    }
    Sprite.prototype.update = function(dt) {
        this.waitTime = this.waitTime + dt;
        if (this.waitTime > 100) { //图片的更新不能根据我们的定时器同步 需要是过了100ms在更新我们的图片
            this.frameIndex = (this.frameIndex + 1) % 8;
            this.waitTime = this.waitTime - 100;
        }
        switch (this.direction) {
            case 0:
                this.x = this.x - this.speed;
                break;
            case 2:
                this.y = this.y - this.speed;
                break;
            case 4:
                this.x = this.x + this.speed;
                break;
            case 6:
                this.y = this.y + this.speed;
                break;
        }
    }
    chnageDirection = function(direction) {
        sprite.direction = direction;
    }
    var sprite = new Sprite(-1, 4, 0, 0, 256, 256);
    var lastTime = Date.now();
    setInterval(function() {
        var dt = Date.now() - lastTime;
        lastTime = Date.now();
        ctx.clearRect(0, 0, 1000, 500);
        spirte.update(dt); //精灵自身更新数据
        spirte.draw();
    }, 16.77)
})