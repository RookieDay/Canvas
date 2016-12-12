  外部调用渲染函数 读取样式和路径 把图会知道屏幕上


  var cvs = document.getElementById('cvs'); // 拿到Canvas标签
  var ctx = cvs.getContext('2d');

  // 矩形绘制函数的封装
  // Rect是Rectangle的缩写，矩形的意思
  function strokeRect(ctx, x, y, w, h) {
      //        ctx.beginPath();
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

  rect.w = 200;

  rect.draw();ginPath(); //每次绘制新的时候最好先清除路径 beginPath
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    ctx.strokeStyle = 'red';
    strokeRect(ctx, 10, 100, 150, 50); 现在画了一个矩形

    alert();
//    ctx.beginPath();             清除上一次绘制的路径 重新开始
    ctx.strokeStyle = 'green';     可能会上下两个矩形都变绿 所以需要清除之前的路径
 //   ctx.stroke();
    strokeRect(ctx,40,10,50,50);  现在又画了一个矩形 ，第一次画的矩形还在那里

</script>
</body>
</html>



一个简单的封装：
  var cvs = document.getElementById('cvs'); // 拿到Canvas标签
  var ctx = cvs.getContext('2d');

  // 矩形绘制函数的封装
  // Rect是Rectangle的缩写，矩形的意思
  function strokeRect(ctx, x, y, w, h) {
      //        ctx.beginPath();
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

  rect.w = 200;

  rect.draw();


  路径渲染样式：
  var cvs = document.getElementById('cvs'); // 拿到Canvas标签
var ctx = cvs.getContext('2d');

ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(0, 200);
//    ctx.lineTo(100,100);
//    ctx.lineTo(200,200); 这两种连上去以后 就相当于盖上去了
// 闭合路径：把起点和终点连到一起
ctx.closePath();


// 描边样式
ctx.strokeStyle = '#ff0000';
ctx.lineWidth = 25; // 不要带单位

// 填充样式
ctx.fillStyle = "green";


ctx.stroke(); // 描边路径

ctx.fill(); // 填充路径


  //   渲染函数 读取样式和函数 才会把图绘制到屏幕上 canvas绘图是基与状态的


  为上下文 设置样式还有路径 ---> 调用渲染函数 把路径渲染成屏幕上的图像-->渲染函数读取了context对象上存贮的样式  路径 然后把图像渲染到屏幕上



比如:
 ctx.moveTo(100,100);
    ctx.lineTo(200,200);
    ctx.lineTo(0,200);
    ctx.closePath();
    ctx.stroke(); // 描边路径
    ctx.fill(); // 填充路径
    ctx.fillStyle='red' 改成红色以后 没有调用过渲染函数 所以还是默认的黑色
    ctx.fill();再次调用的时候才会改变成红色
在比如：

    function strokeRect(ctx, x, y, w, h) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h);
        ctx.lineTo(x, y + h);
        ctx.lineTo(x, y);
        ctx.stroke();  渲染
    }

    ctx.strokeStyle = 'red';  设置描边的样式为红色
    strokeRect(ctx, 10, 100, 150, 50);  调用函数 函数里面 画了路径-->stroke渲染 

    ctx.strokeStyle = 'green';   设置了样式绿色 单单有这个是不会变颜色的

    ctx.stroke();   下面调用了渲染函数 就变成了绿色 盖住了把颜色 渲染函数stroke读取了上面存贮的样式将图像渲染出来
   strokeRect(ctx,40,10,50,50);  这个在画的时候绿色



矩形绘制函数：
    var cvs = document.getElementById('cvs'); // 拿到Canvas标签
    var ctx = cvs.getContext('2d');
   
    // strokeRect和fillRect不渲染路径，而是渲染参数所决定的那个矩形
    //自带矩形绘制函数  这是两个渲染函数 和路径没有关系
    ctx.strokeRect(50, 50, 100, 100); 描边了一个矩形 外部调用渲染函数 读取样式和路径 把图会知道屏幕上
    ctx.fillStyle = 'red';  但是渲染的时候也可以有样式 上下文填充样式改了 是红色
    ctx.fillRect(50, 200, 100, 100);  填充了一个矩形 默认是黑色 这个时候读到的是红色
 
    // 绘制矩形路径 和路径有关   样式和路径没有关系
    ctx.rect(200, 100, 100, 100); 这时候加了一个正方形
    ctx.fillStyle= 'blue';   
    ctx.fill();

    // 清除矩形
    ctx.clearRect(75, 225, 50, 50);  清除了那块矩形区域 动画可以做



    var cvs = document.getElementById('cvs'); // 拿到Canvas标签
    var ctx = cvs.getContext('2d');

    function degToArc(deg) {
        return deg / 180 * Math.PI;
    }

//    ctx.moveTo(100,100);  他会先链接到圆弧的起点处 在进行圆的绘制

    ctx.beginPath();
    ctx.arc(200, 200, 50,degToArc(0),degToArc(360),true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(400, 200, 50,degToArc(0),degToArc(360),true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(400, 400, 50,degToArc(0),degToArc(360),true);

    ctx.fillStyle='red';
//    ctx.fill();
    ctx.stroke();


    fill
    stroke  不传参 直接调用的， 上下文路径 样式fillStyle strokeStyle strokelineWidth

    fillRect
    strokeRect 从上下文获取样式  获取传来的矩形参数


    fillText
    strokeText 渲染文字的时候 从上下文获取style样式/font, lineWidth对此没有影响

