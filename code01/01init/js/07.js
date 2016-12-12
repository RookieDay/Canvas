    var cvs = document.getElementById('cvs'); // 拿到Canvas标签
    var ctx = cvs.getContext('2d');

    function strokeRect(ctx, x, y, w, h) {
        ctx.beginPath(); //清除前面的路径
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    function Rect(ctx, x, y, w, h) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    Rect.prototype.draw = function() {
        strokeRect(this.ctx, this.x, this.y, this.w, this.h);
    };

    var rect = new Rect(ctx, 50, 50, 50, 50);

    setInterval(function() {
        ctx.clearRect(0, 0, 1000, 500); //清除矩形
        rect.x = rect.x + 1;

        displayObjects.forEach(function(displayObject) {
            displayObject.draw();
        })
    }, 25)