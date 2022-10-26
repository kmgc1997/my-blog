---
title: js实现copy功能
date: 2022-10-26
tags:
 - JavaScript
categories:
 -  JavaScript
---
---
利用js实现copy功能，添加到剪切板，代码如下：
```js
function copyFun(){
  document.addEventListener('copy', save); // 监听浏览器copy事件
  document.execCommand('copy'); // 执行copy事件，这时监听函数会执行save函数。
  document.removeEventListener('copy', save); // 移除copy事件
  // 保存方法
  function save(e) {
    e.clipboardData.setData('text/plain', '需复制的内容'); // 剪贴板内容设置
    e.preventDefault();
  }
  alert('复制成功');
}
```