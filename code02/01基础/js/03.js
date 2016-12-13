var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
var img = new Image();

img.addEventListener('load', function() {
    function Sprite(direction, x, y) {
        this.index = -1;
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.waitTime = 0;
        this.speed = 0.1;
    }

    Sprite.prototype.update = function(dt) {
        this.waitTime = this.waitTime + dt;
        if (this.waitTime > 100) {
            this.index = (this.index + 1) % 8;
            this.waitTime = this.waitTime - 100;
        }
        switch (this.direction) {
            case 0: // 左
                this.x = this.x - this.speed * dt;
                break;
            case 2: // 上
                this.y = this.y - this.speed * dt;
                break;
            case 4: // 右
                this.x = this.x + this.speed * dt;
                break;
            case 6: // 下
                this.y = this.y + this.speed * dt;
                break;
        }
    }
    Sprite.prototype.draw = function() {
        ctx.drawImage(img,
            256 * this.index, 256 * this.direction, 256, 256, // 从原图上截取
            this.x, this.y, 256, 256 // 画到Canvas上的位置
        );
    }
    var sprite = new Sprote(4, 0, 0);
    var sprite1 = new Sprite(0, 500, 0);
    setInterval(function() {
        ctx.clearRect(0, 0, 1000, 500);
        sprite.update(16.77); //精灵的移动和时间间隔不一致的处理
        sprite1.update(16.77);
        sprite.draw();
        sprite1.draw();
    }, 16.77)
})

img.src = 'estill.jpg'