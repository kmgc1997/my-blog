---
title: DOM事件对象
date: 2023-02-27
tags:
 - JavaScript
categories:
 -  JavaScript
---
---
在DOM合规的浏览器中，event对象是传给事件处理程序的唯一参数，主要说下event上的方法和属性。
| 属性/方法        | 说明        |
| ------------- |-------------|
| bubbles      | 表示事件是否冒泡 |
| cancelable      | 表示是否可以取消事件的默认行为|
| eventPhase | 表示调用事件处理程序的阶段：1 代表捕获阶段，2 代表到达目标，3 代表冒泡阶段|
| preventDefault()      | 用于取消事件的默认行为。只有cancelable为true才可以调用这个方法|
| stopPropagation()      | 用于取消所有后续事件捕获或事件冒泡。只有bubbles为true才可以调用这个方法|
| target      | 事件目标 |
| type      | 被触发的事件类型 |

```html
<body>
  <button id="myBtn">点我<button>
  <a id="myLink" href="https://www.kmgcweb.top/"></a>
</body>
<script>
  let btn = document.getElementById("myBtn");
  let link = document.getElementById("myLink");
  //获取事件类型
  btn.onclick = function(event){
    console.log(event.type) //click
  }
  btn.addEventListener("click",function(event){
    console.log(event.type) //click
  })
  //取消冒泡
  btn.addEventListener("click",function(event){
    console.log(event.currentTarget);
    event.stopPropagation(); //不加这句body会执行点击事件
  })
  document.body.addEventListener("click",function(event){
    console.log(event.currentTarget);
  })
  //取消默认事件
  link.addEventListener("click",function(event){
    console.log(this.href); //https://www.kmgcweb.top/
    event.preventDefault(); //点击a标签后不会跳转
  })
  //不同阶段下this、currentTarget、target的差异
  document.body.addEventListener("click",function(event){
    console.log(event.eventPhase); //1 捕获阶段
    console.log(event.currentTarget === this); //true
    console.log(event.target); //捕获的目标对象
  },true)

  btn.addEventListener("click",function(event){
    console.log(event.eventPhase); //2 触发按钮本身的事件处理程序（到达目标）
    console.log(event.currentTarget === this); //true
    console.log(event.currentTarget === event.target); //true currentTarget、this、target三者一致
  })

  document.body.addEventListener("click",function(event){
    console.log(event.eventPhase); //3 冒泡阶段
    console.log(event.currentTarget === this); //true
    console.log(event.target); //捕获的目标对象
  },false)
</script>
```