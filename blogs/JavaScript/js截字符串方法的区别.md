---
title: JavaScript中substring、slice、substr方法参数为负数时的差异
date: 2023-02-03
tags:
 - JavaScript
categories:
 -  JavaScript
---
---
substring()方法
---
```js
let string = 'hello world';
console.log(string.substring(-2)); //hello world
console.log(string.slice(-2)); //ld
console.log(string.substr(-2)); //ld
console.log(string.substring(2,-2)); //he
console.log(string.slice(2,-2)); //llo wor
console.log(string.substr(2,-2)); //' '
```
在给 slice()和 substr()传入负参数时，它们的返回结果相同。这是因为-2 会被转换为 9（长度加上负参数），实际上调用的是 slice(9)和 substr(9)。而
substring()方法返回整个字符串，因为-2 会转换为 0。<br>
在第二个参数是负值时，这3个方法各不相同。slice()方法将第二个参数转换为 9，实际上相当
于调用 slice(2, 9)，因此返回"llo wor"。而 substring()方法会将第二个参数转换为 0，相当于调用
substring(2, 0)，等价于 substring(0, 2)，这是因为这个方法会将较小的参数作为起点，将较
大的参数作为终点。对 substr()来说，第二个参数会被转换为 0，意味着返回的字符串包含零个字符，
因而会返回一个空字符串。