---
title: Ant Design Vue table设置行属性
date: 2022-09-30
---
---
使用customRow为table组件设置行属性，鼠标经过、点击、双击等。
```vue
<template>
  <a-table :customRow="rowClick">
    <div id="app">
      <router-view v-if="isRouterAlive"/>
    </div>
  </a-table>
</template>
<script>
export default {
  data(){
    return{
      rowClick:(record, index)=>({
        on:{
          click: (event) => {
            // record 当前行所有数据
            // index 当前行索引值
            // event.srcElement.cellIndex 触发的是哪个单元格(列的索引值)
            console.log(record,index,event.srcElement.cellIndex)
          }
        }
      })
    }
  }
}
</script>
```
[官网链接](https://1x.antdv.com/components/table-cn/#API)