function Bird() {
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
    ctx.drawImage(imgObjects[0],
        52 * this.index, 0, 52, 45,
        // -26和-22.5用于：让鸟的图片的中心点和当前坐标系的中心点重合
        // 因为rotate是以坐标系的原点为中心点旋转的
        this.x, this.y, 52, 45
    );
}

Bird.prototype.fly = function() {
    this.speed = -0.3;
}