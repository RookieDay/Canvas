 var cvs = document.getElementById('cvs');
 var ctx = cvs.getContext('2d');
 var imgElem = document.getElementById('img');
 // 记得图像加载完成之后，再调用绘制图像的函数
 imgElem.addEventListener('load', function() {

     // 绘制到Canvas的位置
     var dRect = {
         x: 0,
         y: 0,
         w: 256,
         h: 256
     };

     // 从原图上截取的位置
     var sRect = {
         w: 256,
         h: 256,
         x: 256 * 4,
         y: 256 * 4
     };

     // 绘制到了第多少帧
     var i = 0;
     // 定时器
     setInterval(function() {
         // 记得每画一帧之前清空整个画布
         ctx.clearRect(0, 0, 1000, 500);
         // 定位原图上的矩形
         sRect.x = 256 * i++;
         // 定位canvas上的矩形
         dRect.x = dRect.x + 10;
         // 不要让原图上的矩形超出原图的最大宽度
         if (i > 7) {
             i = 0
         }

         ctx.drawImage(imgElem,
             sRect.x, sRect.y, sRect.w, sRect.h,
             dRect.x, dRect.y, dRect.w, dRect.h
         );
     }, 150)

 })