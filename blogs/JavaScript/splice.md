---
title: 数组的splice方法
date: 2023-02-13
tags:
 - JavaScript
categories:
 -  JavaScript
---
---
splice或许是最强大的数组方法，splice()可以实现数组中元素的删除、插入、替换。<br>
【删除】：需要给 splice()传 2 个参数：要删除的第一个元素的位置和要删除的元素数量。可以从数组中删除任意多个元素，比如 splice(0, 2)会删除前两个元素。<br>
【插入】：需要给 splice()传 3 个参数：开始位置、0（要删除的元素数量）和要插入的元素，可以在数组中指定的位置插入元素。第三个参数之后还可以传第四个、第五个参数，乃至任意多个要插入的元素。
<br>
【替换】：splice()在删除元素的同时可以在指定位置插入新元素，同样要传入 3 个参数：开始位置、要删除元素的数量和要插入的任意多个元素。要插入的元素数量不一定跟删除的元素数量一致。
```js
let colors = ["red", "green", "blue"];
let newArr = [];
newArr = colors.splice(1,2);
console.log(newArr); //["green", "blue"] 返回被删除元素
console.log(colors); //["red"]
newArr = colors.splice(1,0,'yellow','purple'); 
console.log(newArr); //[] 返回空数组
console.log(colors); //["red", "yellow", "purple"]
newArr = colors.splice(0,1,'black','white');
console.log(newArr); //返回被替换掉的元素
console.log(colors); //["black", "white", "yellow", "purple"]
```