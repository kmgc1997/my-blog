---
title: Vue router跳转方式
date: 2023-02-21
tags:
 - Vue
categories:
 -  Vue2笔记
---
---
使用router-link
---
```html
<!--
  1、不带参数
  尽量使用第一种，如果使用params传参时第二种的path会改变，导致页面找不到
-->
<router-link :to="{name:'home'}"></router-link>
<router-link :to="{path:'/home'}"></router-link>

<!--
  2、带参数
  （1）params
  使用params传参参数只会在第一次跳转时存在，页面刷新时丢失。
  配置path后可以解决页面刷新参数丢失问题：path: '/home/:id'或path: '/home:id'。
  使用this.$route.params.id取值
  (2)query
  在url后拼接上参数，页面刷新参数不会丢失。
  路由上不需要什么配置
  使用this.$route.query.id取值
-->
<router-link :to="{name:'home',params:{id:1}}"></router-link>
<router-link :to="{name:'home',query:{id:1}}"></router-link>
```
[router-link](https://v3.router.vuejs.org/zh/api/#router-link-props)

使用this.$router.push()
---
```js
// 1、不带参数
this.$router.push('/home');
this.$router.push({name:'home'});
this.$router.push({path:'/home'});

// 2、带参数
// （1）params
// 使用params传参参数只会在第一次跳转时存在，页面刷新时丢失。
// 配置path后可以解决页面刷新参数丢失问题：path: '/home/:id'或path: '/home:id'。
// 使用this.$route.params.id取值
//只能使用name
this.$router.push({name:'home',params:{id:1}});
// (2)query
// 在url后拼接上参数，页面刷新参数不会丢失。
// 路由上不需要什么配置
// 使用this.$route.query.id取值
this.$router.push({name:'home',query:{id:1}});
this.$router.push({path:'/home',query:{id:1}});
```
使用this.$router.replace()
---
this.$router.replace的用法和this.$router.push一样，区别在于后者会在history栈中添加一个记录，点击浏览器后退会返回到上一个页面。

使用this.$router.go(n)
---
向前或者向后跳转n个页面。n为正整数时向前跳转，n为负整数时向后跳转，n为零时刷新当前页面。

[this.$router的方法](https://v3.router.vuejs.org/zh/api/#router-push)