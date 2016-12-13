function Land(img, x) {
    this.img = img;
    this.x = x;
    this.speed = -0.1;
}
Land.prototype.update = function(dt) {
    if (this.x < -336) {
        // 第一张图片出去以后 跟在第二个的后面
        this.x = this.x + 336 * 4;
    }
    this.x = this.x + this.speed * dt;
}
Land.prototype.draw = function() {
    ctx.drawImage(this.img, this.x, 600 - 112);
}