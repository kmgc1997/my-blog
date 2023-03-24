---
title: async/await
date: 2023-03-14
tags:
 - JavaScript
categories:
 -  JavaScript
---
---
async/await是ES8新增的，以同步的方式实现异步操作。

async
---
async关键字用于声明异步函数。这个关键字可以用在函数声明、函数表达式、箭头函数和方法上。
```js
function asyncFun1(){ }
let asyncFun2 = async function(){}
let asyncFun3 = async ()=>{}
```
async关键字可以让函数具有异步特征，如果使用return返回了值（如果没有return则会返回undefined），这个值会被Promise.resolve()包装成一个Promise对象。
```js
async function asyncFun(){
  return 'async关键字'
}
asyncFun().then(res=>console.log(res)) //async关键字

async function asyncFun2(){
  let str = 'async关键字';
}
asyncFun2().then(res=>console.log(res)) //undefined
```
在异步函数中抛出错误会返回拒绝的Promise对象，可以用catch()方法来处理错误。
```js
async function asyncFun(){
  throw new Error('函数异常')
}
asyncFun().catch(err=>console.log(err)) //Error: 函数异常
```
await
---
await关键字可以暂停异步函数代码的执行，等待Promise解决然后在执行后面的代码。
```js
async function asyncFun(){
  console.log(1);
  let a = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(2)
    },3000)
  });
  console.log(a);
  console.log(3);
}
asyncFun()
//1
//2 三秒后执行
//3 等待await后promise返回结果后执行
```
