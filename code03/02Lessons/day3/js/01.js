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
    this.cast = 0;
}

Scene1.prototype.update = function(dt) {
    this.time += dt;


    if (this.cast == 1) { //判断当前场景状态
        // 向上退场
        console.log('out1');
        this.y = this.y - dt * 0.1; //向上离场
        if (this.y < -600) { //场景本身高度是600
            this.cast = 0; //当前的
            casting = 0; //全局
            currIndex += 1; //全局
            var _this = this;
            setTimeout(function() {
                _this.y = 0;
                _this.x = 500;
            }, 50);
        }
    } else if (this.cast == 2) { //什么也不做
        this.cast = 0; //当前的
        casting = 0; //全局
    }



    // 坐标位置
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


function Scene2(x, y) {
    this.x = x;
    this.y = y;


    this.displayObjects = [];

    var text = new TextObject('这里是场景2', 200, 100, '24px 微软雅黑')
    this.displayObjects.push(text);

    this.cast = 0;
}


Scene2.prototype.update = function(dt) {
    if (this.cast == 1) { // 第二个场景不需要向上离场 因为现在已经没了
        this.cast = 0 //当前场景的离场动画 变成未离场
        casting = 0; //全局的离场标识  变为未离场
    } else if (this.cast == 2) {
        this.y += dt * 0.1;
        if (this.y > 600) {
            this.cast = 0;
            casting = 0;
            currIndex -= 1; //第二个场景前面有一个场景  完成场景本身的动画设置

        }
    }

    if (this.cast == 0) {

        if (this.y > 0) { //场景的上场动画
            this.y -= dt * 0.1;
        } else {
            this.y = 0;
        }
    }
}
Scene2.prototype.draw = function() {
    ctx.save();
    ctx.translate(this.x, this.y);
    this.displayObjects.forEach(function(displayObject) {
        displayObject.draw();
    })
    ctx.restore();
}

//0 not  1 next 2 before
// 全局的casting变量
// 0 未滑动
// 1 向上滑动
// 2 向下滑动
// casting 变量被用于主循环

// 通知当前场景 你应该如何切换
// 当前场景的cast属性
// 0 未滑动
// 1 向上滑动
// 2 向下滑动   
// 场景本身有cast 因为自己不知道自己在场景数组里面的第几位  场景数组记录场景的排列 但是场景内部不知道第几位
var casting = 0;
var currIndex = 0;

function main() {
    var lastTime = Date.now();
    // var img1 = new ImageObject(imgObjects[0], 200, 200, 156, 45);
    var scene = new Scene1(500, 0);
    var scene2 = new Scene2(0, 600);
    var scenes = [scene, scene2];
    var currentScene = 0;

    var mouseY = 0;
    cvs.addEventListener('mousedown', function(event) {
        var x = event.layerX;
        var y = event.layerY;
        mouseY = y;
    })


    cvs.addEventListener('mouseup', function(event) {
        var x = event.layerX;
        var y = event.layerY;
        if (mouseY - y > 50) {
            console.log('up');
            casting = 1;
        } else if (mouseY - y < -50) {
            // 向下滚动
            console.log('向下');
            casting = 2;
        }
    })

    function mainLoop() {
        var now = Date.now();
        var dt = now - lastTime;
        lastTime = Date.now();

        ctx.clearRect(0, 0, 800, 600);

        // var currentScene = scene;

        // currentScene.update(dt);
        // currentScene.draw(); //这样就只绘制了当前的场景 update场景就可以  model就是scene

        // scene2.update(dt);
        // scene2.draw();

        if (casting == 1) {
            var currentScene = scenes[currIndex];
            currentScene.cast = 1;
            var nextScene = scenes[currIndex + 1];
            nextScene.update(dt);
            nextScene.draw();

            currentScene.update(dt);
            currentScene.draw();
        } else if (casting == 2) {
            var currentScene = scenes[currIndex];
            currentScene.cast = 2;
            var nextScene = scenes[currIndex - 1];
            nextScene.update(dt);
            nextScene.draw();

            currentScene.update(dt);
            currentScene.draw();
        } else {
            var currentScene = scenes[currIndex];
            currentScene.update(dt);
            currentScene.draw();
        }
        // img1.draw(); 
        requestAnimationFrame(mainLoop)
    }
    mainLoop();
}