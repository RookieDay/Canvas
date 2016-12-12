 var cvs = document.getElementById('cvs');
 var ctx = cvs.getContext('2d');
 var imgElem = document.getElementById('img');
 // 记得图像加载完成之后，再调用绘制图像的函数
 imgElem.addEventListener('load', function() {
     // 三参数的绘制图像函数
     //        ctx.drawImage(imgElem,100,100);


     // 五参数的绘制图像函数:
     // dx,dy,dw,dh中的d表示“目的地destination”
     // 我要把图像绘制到Canvas的哪个矩形之中
     // 会有缩放效果
     //        ctx.drawImage(imgElem,100,100,200,150);

     // 九参数的绘制图像函数：
     // 从原图上截取一个矩形，绘制到Canvas上的某个矩形中
     ctx.drawImage(imgElem,
         0, 0, 100, 100,
         100, 100, 200, 200
     )
 })