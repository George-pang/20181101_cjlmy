window.onload = function () {
    var map = new BMap.Map("container"); //创建地图实例
    var point = new BMap.Point(117.28285, 31.76305); //创建中心点坐标
    map.centerAndZoom(point, 15); //地图初始化，并显示地图展示级别(缩放级别)
    //map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    //前两句代码的缩写
    map.setCurrentCity("合肥"); // 设置地图显示的城市
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注    
    map.addOverlay(marker); // 将标注添加到地图中 ，默认标注样式
};
