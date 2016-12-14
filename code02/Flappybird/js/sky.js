function Sky(img, x) {
    this.img = img;
    this.x = x;
    this.speed = -0.03;
}
Sky.prototype.update = function(dt) {
    if (this.x < -800) {
        // 一共三张照片 轮回 第一张图片出去以后 跟在第二个的后面
        this.x = this.x + 1600;
    }
    this.x = this.x + this.speed * dt;
}
Sky.prototype.draw = function() {
    ctx.drawImage(this.img, this.x, 0);
}