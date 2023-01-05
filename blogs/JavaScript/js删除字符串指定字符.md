---
title: JavaScript删除字符串中指定的字符
date: 2023-01-04
tags:
 - JavaScript
categories:
 -  JavaScript
---
---
substring()方法
---
substring() 方法用于提取字符串中介于两个指定下标之间的字符。<br>
substring() 方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。
```js
var str = 'abcdefg';
console.log(str.substring(5)); //fg 只有一个参数时从索引为一个非负的整数开始截取字符
console.log(str.substring(5,6)); //f 截取索引为5-6的字符(不包括索引为6)
```
[菜鸟教程](https://www.runoob.com/jsref/jsref-substring.html)

String slice() 方法
---
slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。<br>
使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分。<br>
start 参数字符串中第一个字符位置为 0, 第二个字符位置为 1, 以此类推，如果是负数表示从尾部截取多少个字符串，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。<br>
end 参数如果为负数，-1 指字符串的最后一个字符的位置，-2 指倒数第二个字符，以此类推。
```js
var str = 'abcdefg';
console.log(str.slice(2)); //cdefg
console.log(str.slice(2,3)); //c
console.log(str.slice(-1)); //g
console.log(str.slice(-3)); //efg
```
[菜鸟教程](https://www.runoob.com/jsref/jsref-slice-string.html)

replace() 方法
---
replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
```js
var str = 'abcdefg'
console.log(str.replace('abcdefg','ABCDEFG')); // ABCDEFG
```
[菜鸟教程](https://www.runoob.com/jsref/jsref-replace.html)