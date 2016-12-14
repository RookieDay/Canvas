// 加载图片
var imgs = ['1-1.png','1-2.png','2-1.jpg','2-2.jpg','2-3.png','2-3.png'];
var imgObjects = [];

var loadCount = 0;
// 图片加载完成后的监听器
function listener() {
    loadCount++;
    if (loadCount >= imgs.length) {
        main();
    }
}

imgs.forEach(function (imgurl) {
    // 通过遍历，创建了五个IMG标签
    var img = new Image(); // 这个是img标签。
    img.addEventListener('load', listener);
    img.src = './imgs/' + imgurl;
    imgObjects.push(img);
});