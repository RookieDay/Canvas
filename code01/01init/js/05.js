var cvs = document.getElementById('cvs'); // 拿到Canvas标签
var ctx = cvs.getContext('2d');

ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(0, 200);
//    ctx.lineTo(100,100);
//    ctx.lineTo(200,200);
// 闭合路径：把起点和终点连到一起
ctx.closePath();


// 描边样式
ctx.strokeStyle = '#ff0000';
ctx.lineWidth = 25; // 不要带单位

// 填充样式
ctx.fillStyle = "green";


ctx.stroke(); // 描边路径

ctx.fill(); // 填充路径