---
title: swiper设置了淡入淡出切换后文字叠加问题
date: 2022-11-01
---
---

使用fade效果，需要设置一个参数crossFade，默认是false。<br>
false:关闭淡出。过渡时，原slide透明度为1（不淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。<br>
true:开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。<br>
swiper4以及以上设置：

```js
var mySwiper = new Swiper('.swiper',{
  effect : 'fade',
  fadeEffect: {
    crossFade: true,
  }
})
```
swiper4以下设置：

```js
var mySwiper = new Swiper('.swiper-container',{
  effect : 'fade',
  fade: {
    crossFade: true,
  }
})
```