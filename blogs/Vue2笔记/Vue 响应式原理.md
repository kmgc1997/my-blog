---
title: Vue 响应式原理
date: 2023-02-27
tags:
 - Vue
categories:
 -  Vue2笔记
---
---
通过数据劫持和发布订阅者模式来实现，同时利用Object.defineProperty()劫持各个属性的setter和getter，
在数据发生改变的时候发布消息给订阅者，触发对应的监听回调渲染视图，也就是说数据和视图时同步的，数据发生改变，视图跟着发生改变，视图改变，数据也会发生改变。
```js
let Dep = {
    clientList:{},
    //添加订阅者
    listen:function(key,fn){
        (this.clientList[key] || (this.clientList[key] = [])).push(fn);
    },
    //推送方法
    trigger:function(){
        let key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];
        if(!fns || fns.length === 0){
            return;
        }
        for(let i = 0, fn;fn = fns[i++];){
            fn.apply(this,arguments)
        }
    }
}

let dataHijack = function({data,key,selector}){
    let value = '',el = document.querySelector(selector);
    Object.defineProperty(data,key,{
        get:function(){
            return value;
        },
        set(newValue){
            value = newValue;
            //值改变后推送
            Dep.trigger(key,value)
        }
    })
    //添加订阅者
    Dep.listen(key,function(text){
        el.innerText = text;
    })
}
```
只要数据源发生改变view视图也会改变。
```html
<body>
    <div id="app">
        姓名: <span class="span1"></span>
        ----------
        称号: <span class="span2"></span>
    </div>
    <script src="js/dep.js"></script>
    <script>
        let obj = {}
        dataHijack({
            data:obj,
            key:'name',
            selector:'.span1'
        })
        dataHijack({
            data:obj,
            key:'nickname',
            selector:'.span2'
        })
        obj.name = '孙悟空'
        obj.nickname = '齐天大圣'
    </script>
</body>
```