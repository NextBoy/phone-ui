# notify 
接收的参数
 - message : '显示的内容'
 - position string 通知块出现的位置  center  top bottom 
 - duration string 显示时长
 - background string 背景颜色
 - font 
    - color string 字体颜色
    - size  string 字体大小
    
    
 ## example
 ```vue
this.$notify('这是展示的内容') 


this.$notify({
          message: '发送成功',
          background: 'rgba(0, 0, 0, 0.8)',
          font: {
            size: '16px',
            color: 'white'
          }
        })
```
