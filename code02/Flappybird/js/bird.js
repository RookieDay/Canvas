function Bird(img, cvs) {
    var _this = this;

    cvs.addEventListener('click', function(event) {
        var x = event.layerX;
        var y = event.layerY;
        // if (x > 30 && x < 130 && y > 30 && y < 80) {
        _this.fly(); //务必注意这里的this指向
        // }
    })
    this.x = 200;
    this.y = 100;
    this.index = 0;
    this.speed = 0;
    this.a = 0.0005;
    this.waitTime = 0;
}
Bird.prototype.update = function(dt) {
    this.waitTime = this.waitTime + dt;
    if (this.waitTime > 100) {
        this.index = (this.index + 1) % 3;
        this.waitTime = this.waitTime - 100;
    }
    this.speed = this.speed + this.a * dt;
    this.y = this.y + this.speed * dt;
}
Bird.prototype.draw = function() {
    ctx.save(); //保存旋转之前的坐标系 然后旋转以后在恢复
    ctx.translate(this.x, this.y); //坐标系移动到图片的位置 旋转
    // 根据速度变化角度
    var speed = this.speed > 0.3 ? 0.3 : this.speed;
    var angle = speed / 0.3 * 45;
    ctx.rotate(angle / 180 * Math.PI);
    ctx.drawImage(imgObjects[0],
        52 * this.index, 0, 52, 45,
        // -26和-22.5用于：让鸟的图片的中心点和当前坐标系的中心点重合
        // 因为rotate是以坐标系的原点为中心点旋转的
        -26, -22.5, 52, 45
    );

    ctx.restore(); // 鸟绘制完后，恢复context的状态到绘制鸟之前的状态
}

Bird.prototype.fly = function() {
    this.speed = -0.3;
}