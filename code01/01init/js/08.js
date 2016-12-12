    var cvs = document.getElementById('cvs'); // 拿到Canvas标签
    var ctx = cvs.getContext('2d');

    function degToArc(deg) {
        return deg / 180 * Math.PI;
    }

    //true or false 顺时 逆时
    ctx.beginPath();
    ctx.arc(200, 200, 50, degToArc(0), degToArc(360), true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(400, 200, 50, degToArc(0), degToArc(360), true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(400, 400, 50, degToArc(0), degToArc(360), true);

    ctx.fillStyle = 'red';
    ctx.stroke();