var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
var res = ['birds', 'land', 'pipe1', 'pipe2', 'sky'];
var imgObjects = []; // 图片标签的数组

var count = 0;

function listener() {
    count++;
    if (count >= 5) {
        main();
    }
}

res.forEach(function(url) {
    var img = new Image();
    img.src = './imgs/' + url + '.png';
    img.addEventListener('load', listener);
    imgObjects.push(img);
})

function ImageObject(img, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}
ImageObject.prototype.draw = function() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}

function TextObject(text, x, y, font) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.font = font;
}
TextObject.prototype.draw = function() {
    ctx.save(); //以防影响整体上下文的字体
    ctx.font = this.font;
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
}

// 不同的场景 不同的对象 显示
function Scene1(x, y) {
    this.x = x;
    this.y = y;
    this.displayObjects = [];
    var bird = new ImageObject(imgObjects[0], 200, 200, 156, 45);
    this.displayObjects.push(bird);
    this.bird = bird;

    var text = new TextObject('这是一堆鸟', 225, 150, '24px 微软雅黑');
    this.displayObjects.push(text);
    this.text = text;

    this.time = 0;
}

Scene1.prototype.update = function(dt) {
    this.time += dt;
    if (this.x > 0) {
        this.x = this.x - dt * 0.1;
    } else {
        this.x = 0;
    }


    var bird = this.bird;
    if (this.time < 1000) {
        bird.y = bird.y - 0.1 * dt;
    }

    if (this.time > 500 && this.time < 1000) {
        this.text.y -= 0.1 * dt;
    }
}
Scene1.prototype.draw = function() {
    ctx.save();
    // 绘制场景的时候 平移我们的坐标系
    ctx.translate(this.x, this.y);
    this.displayObjects.forEach(function(displayObject) {
        displayObject.draw();
    })
    ctx.restore();
}




function main() {
    var lastTime = Date.now();
    // var img1 = new ImageObject(imgObjects[0], 200, 200, 156, 45);
    var scene = new Scene1(500, 0);

    function mainLoop() {
        var now = Date.now();
        var dt = now - lastTime;
        lastTime = Date.now();
        ctx.clearRect(0, 0, 800, 600);
        scene.update(dt);
        scene.draw();
        // img1.draw();
        requestAnimationFrame(mainLoop)
    }
    mainLoop();
}