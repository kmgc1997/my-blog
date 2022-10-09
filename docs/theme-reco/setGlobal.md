---
title: Ant Design Vue设置国际化
date: 2022-09-28
---
---
在App.vue使用LocaleProvider组件实现全局配置，可以根据当前语言编码动态设置locale。
```vue
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view v-if="isRouterAlive"/>
    </div>
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
import i18nMixin from '@/store/i18n-mixin'
export default {
  mixins: [i18nMixin],
  computed:{
    locale(){
      if(this.currentLang == 'zh-CN'){
        return zhCN
      }else{
        return enUS
      }
    }
  }
</script>
```
[官网链接](https://1x.antdv.com/components/locale-provider-cn#rice)