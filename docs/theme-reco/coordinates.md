---
title: 计算地图多边形坐标中心点
date: 2022-05-23
---
---

**业务需求**：给地图上绘制的多边形设置文字提示（label）

![图片1](./img/map.png)
<center>(效果图)</center>

实现代码
```js
calculateCenter(data) {
  let fitterArr = []
  let Arr = []
  let X = 0,
    Y = 0,
    Z = 0
  if(data.location !== '' && data.location !== null){
    Arr = JSON.parse(data.location)
  }
  //过滤坐标数目小于3的无用数据
  if(Arr.length > 0){
    Arr.forEach(item => {
      if (item.length >= 3) {
        fitterArr.push(item)
      }
    })
  }
  let total = fitterArr.length
  fitterArr.forEach(itemFitter => {
    itemFitter.forEach(child => {
      let lng = (child.lng * Math.PI) / 180
      let lat = (child.lat * Math.PI) / 180
      let x, y, z
      x = Math.cos(lat) * Math.cos(lng)
      y = Math.cos(lat) * Math.sin(lng)
      z = Math.sin(lat)
      X += x
      Y += y
      Z += z
    })
  })
  X = X / total
  Y = Y / total
  Z = Z / total
  let Lng = Math.atan2(Y, X)
  let Hyp = Math.sqrt(X * X + Y * Y)
  let Lat = Math.atan2(Z, Hyp)
  return { lng: Lng * 180 / Math.PI, lat: Lat * 180 / Math.PI }
}
```