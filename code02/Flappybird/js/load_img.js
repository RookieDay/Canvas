// 加载图片
var imgs = ['birds.png', 'land.png', 'pipe1.png', 'pipe2.png', 'sky.png'];
var imgObjects = [];
var loadCount = 0;
// 可以使用键值对进行数据的存储
// var imgObjects = {
//     sky:'sky.png'
// }
function listener() {
    loadCount++;
    if (loadCount >= imgs.length) {
        main();
    }
}

imgs.forEach(function(imgurl) {
    var img = new Image();
    img.addEventListener('load', listener);
    img.src = './imgs/' + imgurl;
    imgObjects.push(img);
})