# 用法：

```vue
<div
 data-touch-distance="120"
 v-touch-direction = "{left: fun, right: fun, up: fun, down: fun}"
>
</div>
```

 - data-touch-distance 

非必写指令
表示滑动的阈值，滑动的距离需要超过阈值才有效，默认为150

- v-touch-direction

接收一个对象：left right up down 的值分别为相对应触发的回调函数
 
