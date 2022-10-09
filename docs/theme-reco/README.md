---
title: js笔记
date: 2022-01-04
---
---
JavaScript数据类型
---
JavaScript数据类型可分为两大类基础数据类型和引用数据类型

基础数据类型：String(字符串)、Number(数字)、Undefined(未定义)、Null(空值)、Boolean(布尔)、Symbol(独一无二)、Bigint(大数字类型)

引用数据类型：Object(对象)、Array(数组)、Function(函数)

---
数组
---
在项目中经常使用的数据类型，存放一些列表数据。
### 数组长度赋值
```js
//直接指定数组长度
let arr1 = new Array(3)
//复制其他数组的长度
let arr2 = [1,2,3,4,5,6]
let arr3 = new Array(arr2.length)
```
[菜鸟教程](https://www.runoob.com/jsref/jsref-obj-array.html)

---
节流防抖
---
节流：时间触发后在规定时间内，事件处理函数不会再次被调用，在规定时间内事件只会触发一次。用于滚动加载更多、高频点击、搜索框联想功能等。
``` js
/*
 * @param fn要被节流的函数
 * @param delay规定的时间
*/
function throttle(fn,delay){
  var lastTime = 0 //设置初始结束时间，用于记录上一次事件触发的时间
  return function(){
    var nowTime = Date.now() //记录当前事件触发的时间
    if(nowTime - lastTime > delay){
      fn.call(this) //调用传入的函数，更改this指向
      lastTime = nowTime
    }
  }
}
//调用
document.getElementById("btn").onclick = throttle(function(){
  console.log('事件被触发了')
},1000)
```
防抖：多次触发事件，在规定时间内只让最后一次生效。用于搜索框搜索输入后自动检索、手机号，邮箱等的验证、窗口大小调整后在渲染。
``` js
/*
 * @param fn要被防抖的函数
 * @param delay规定的时间
*/
function debounce(fn,delay){
  var timer = null //记录上一次的计时器
  return function(){
    clearTimeout(timer) //清除上一次的计时器
    timer = setTimeout(function(){
      fn.apply(this) //更改this指向
    },delay)
  }
}
//调用
document.getElementById("btn").onclick = debounce(function(){
  console.log('按钮被点击了' + Date.now())
},1000)
```