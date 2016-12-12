    var cvs = document.getElementById('cvs'); // 拿到Canvas标签
    var ctx = cvs.getContext('2d');

    // strokeRect和fillRect不渲染路径，而是渲染参数所决定的那个矩形
    ctx.strokeRect(50, 50, 100, 100);
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 200, 100, 100);

    // 绘制矩形路径
    ctx.rect(200, 100, 100, 100);
    //    ctx.fillStyle= 'blue';
    ctx.fill();

    // 清除矩形
    ctx.clearRect(75, 225, 50, 50);