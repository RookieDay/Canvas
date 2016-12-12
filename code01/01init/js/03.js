var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');


function strokeRect(ctx, x, y, w, h) {
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y);
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x, y + h);
    ctx.lineTo(x, y);
    ctx.stroke();
}

ctx.strokeStyle = 'red';
strokeRect(ctx, 10, 100, 150, 50);


ctx.strokeStyle = 'green';
strokeRect(ctx, 40, 10, 50, 50);