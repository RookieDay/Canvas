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

  //   渲染函数 读取样式和函数 才会绘制