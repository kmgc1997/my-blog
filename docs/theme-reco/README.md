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
### 数组填充
```js
//使用fill方法填充数组
let arr1 = new Array(10).fill(0); //向长度为10的数组中填充0
//生成1-100的数组
let arr2 = new Array(100).fill(0).map((item,index)=>index+1)
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
如果内部函数没有使用箭头函数定义，则this对象会在运行时绑定到执行函数的上下文。如果在全局函数中调用，则this在非严格模式下等于window，在严格模式下等于undefined。如果作为某个对象的方法调用，则this等于这个对象。匿名函数在这种情况下不会绑定到某个对象，这就意味着this会指向window，除非在严格模式下this是undefined。
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
检测window.open是否被屏蔽
---
```js
let isBlocked = false;
try {
  let newWindow = window.open("https://www.kmgcweb.top", "_blank");
  if (newWindow == null){
    isBlocked = true;
  } 
} catch (){
  isBlocked = true;
} 
if (isBlocked){
  alert("弹出的窗口被屏蔽!");
}
```
根据URLSearchParams查询参数
---
使用URLSearchParams查询字符串中的参数很容易，其中有get()、set()和delete()等方法。
```js
let url = 'https://www.kmgcweb.top/?key=32&flag=true';
let qs = url.split('?')[1];
let searchParams = new URLSearchParams(qs);
console.log(searchParams.toString()); //key=32&flag=true
console.log(searchParams.has('key')); //true
console.log(searchParams.get('key')); //32
searchParams.set('id',102);
console.log(searchParams.toString()); //key=32&flag=true&id=102
searchParams.delete('key');
console.log(searchParams.toString()); //flag=true&id=102

//支持URLSearchParams的浏览器，URLSearchParams的实例是可迭代的
for(let param of searchParams){
  console.log(param); //["key", "32"] ["flag", "true"]
}
```
JSON
---
JSON是一种轻量级数据格式，可以方便地表示复杂数据结构。这个格式使用JavaScript语法的一个子集表示对象、数组、字符串、数值、布尔值和null。  
JSON.stringify()：将JavaScript对象序列化为JSON字符串，有三个参数:
1. 要序列化的对象;
2. 过滤器，可以是数组或函数;
3. 控制缩进和空格最多缩进10个空格，可以自定义字符替换空格。

JSON.parse()：将JSON数组解析为JavaScript对象。
```js
let obj = {
  name:'张三',
  gender:'男',
  age:24,
  friend:[
    {
      name:'李四',
      gender:'男'
    }
  ]
}
let jsonText = JSON.stringify(obj);
let jsonText2 = JSON.stringify(obj,['name','age']);
let jsonText3 = JSON.stringify(obj,(key,value)=>{
  switch(key){
    case "name":
      return '我是' + value;
    case "friend":
      return value = [];
    default:
      return value;
  }
})
let jsonText4 = JSON.stringify(obj,null,2);
let jsonText5 = JSON.stringify(obj,null,'--'); //JSON.parse(jsonText5)会报错，json中出现-符号
console.log(jsonText) //{"name":"张三","gender":"男","age":24,"friend":[{"name":"李四","gender":"男"}]}
console.log(jsonText2) //{"name":"张三","age":24}
console.log(jsonText3) //{"name":"我是张三","gender":"男","age":24,"friend":[]}
let obj2 = JSON.parse(jsonText);
```
利用try catch检测是否为JSON字符串
---
```js
function isJSONString(str){
  try{
    JSON.parse(str)
  }catch(e){
    return false
  }
  return true
}
let jsonText = undefined;
if(isJSONString(jsonText)){ //false
  console.log(JSON.parse(jsonText));
}
```