---
title: js对象的两种取值方式
date: 2022-06-07
---
---
Object：{key:value}

js对象可以利用.和[]取出属性值，利用.取值，key是静态的；利用[]取值，key是动态的可以是字符串、数字以及变量。
### 用.取值
```js
const obj = {name:'张三',age:28,work:'前端'}
let name = obj.name
console.log(name) //张三
```
### 用[]取值
```js
const obj = {name:'张三',age:28,work:'前端'}
let name = obj['name'] //注意key是字符串类型
console.log(name) //张三

//利用for in 来遍历对象
const arr = []
for(let val in obj){
  arr.push(obj[val]) //val为变量
}
console.log(arr) //['张三',28,'前端']
```