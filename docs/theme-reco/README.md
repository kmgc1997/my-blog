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
节流：事件触发后在规定时间内，事件处理函数不会再次被调用，在规定时间内事件只会触发一次。用于滚动加载更多、高频点击、搜索框联想功能等。
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
---
for in和for of
---
for in适合用于遍历对象，获取对象的键名，它可以把对象原型上的键名也遍历出来。这个键名是字符串类型，用于遍历数组勉强也行(数组的下标是数字)。
```js
Object.prototype.work = '前端';
const obj = {name:'张三',age:24,gender:'男'};
for(let key in obj){
  console.log(key); //name age gender work
  if(key == 'age'){
    obj[key] = 20;
  }
}
console.log(obj); //{name: "张三", age: 20, gender: "男"}
```
for of是ES6新增的功能，用来获取键值对中的值，能遍历数组和字符串，但是不能用来遍历对象。与forEach()不同的是，它可以正确响应break、continue和return语句。
```js
const arr = ['apple','pear','orange'];
for(let value of arr){
  if(value == 'pear'){
    continue;
  }
  console.log(value); //apple orange
}
```
this指向问题
---
如果内部函数没有使用箭头函数定义，则this对象会在运行时绑定到执行函数的上下文。如果在全局函数中调用，则this在非严格模式下等于window，在严
格模式下等于undefined。如果作为某个对象的方法调用，则this等于这个对象。匿名函数在这种情况下不会绑定到某个对象，这就意味着this会指向window，除非在严格模式下this是undefined。
```js
var name = 'Window'; //这里只能使用var声明变量才能注册到Window对象上
let object = {
    name: 'Object',
    getSayName() {
    return function(){
      return this.name
    }
  } 
};
console.log(object.getSayName()()); //Window
```
分析一下getSayName函数内部返回的匿名函数的this为什么会指向Window，object调用getSayName函数时getSayName内部this指向是object，object.getSayName()执行完后立马执行匿名函数，此时this指向已经变成了Window而非object。

每个函数在被调用时都会自动创建两个特殊变量：this 和 arguments。内部函数永远不可能直接访问外部函数的这两个变量。但是把this赋值给一个变量，在内部函数使用这个变量访问，或者内部函数使用箭头函数就能直接拿到外部函数的this。
```js
var name = 'Window'; //这里只能使用var声明变量才能注册到Window对象上
let object = {
  name: 'Object',
  getSayName() {
    let that = this;
    return function(){
      return that.name
    }
  }
};
console.log(object.getSayName()()); //Object

let object2 = {
  name: 'Object2',
  getSayName() {
    return ()=> this.name
  }
};
console.log(object2.getSayName()()); //Object2
```