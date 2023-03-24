---
title: Vue 响应式原理
date: 2023-02-27
tags:
 - Vue
categories:
 -  Vue2笔记
---
---
Vue的响应式原理的核心是通过ES5的Object.defindeProperty进行数据劫持，然后利用get和set方法进行数据的获取和设置。