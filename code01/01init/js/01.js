var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');

function Circle(ctx, x, y, r, color) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
}
Circle.prototype.draw = function() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
}
var c = new Circle(ctx, 100, 100, 50, 'red');
c.draw();