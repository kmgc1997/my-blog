---
title: js获取当前浏览器所在位置
date: 2022-06-09
---
---
借助百度地图获取当前浏览器所在位置
```js
window.onload = function(){
  let mapDom = document.createElement('div')
  mapDom.id = 'map'
  document.body.appendChild(mapDom)
  const map = new BMap.Map('map');
  function getCoord(result){
    let cityCenter = result.center; //当前城市中心点坐标
    let cityName = result.name; ///当前城市
  }
  const myCity = new BMap.LocalCity();
  myCity.get(getCoord)
}
```