var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.lineTo(0, 200);
ctx.lineTo(100, 100);

ctx.stroke();
ctx.fill();