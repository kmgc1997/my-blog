---
title: 隐藏select的下拉箭头
date: 2023-02-20
tags:
 - CSS
categories:
 -  CSS
---
---
使用样式隐藏select下拉的箭头，不过建议隐藏原始的select，自己写结构美化，只需要用到select事件的触发即可。
--
```html
<select class="mySelect">
  <option value="选项">选项</option>
</select>
<style>
.mySelect{
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}
</style>