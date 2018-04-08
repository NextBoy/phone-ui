import Vue from 'vue';
import wxLoadComponent from './main.vue'

let wxLoadConstructor = Vue.extend(wxLoadComponent)

let instance // 单个实例
let instances = [] // 多个实例
let seed = 1 // 当前实例下标

const wxLoad = (function () {
  // 如果是服务端则返回
  if (Vue.prototype.$isServer) return 0

  if (seed === 2) {
    return instance
  }
  // 创造实例
  instance = new wxLoadConstructor({
    propsData: {}
  })
  // 创建个唯一的id
  let id = 'loading_' + seed
  seed++
  instance.id = id
  // 将挂载的实例保存起来
  instance.vm = instance.$mount()
  // 开始loading
  instance.start = function (message) {
    instance.vm.visible = true
    instance.vm.loadRes = false
    instance.vm.message = message
  }
  // 关闭loading
  instance.close = function (status = false, message = '执行完成') {
    if (status) {
      instance.vm.loadRes = true
      instance.vm.message = message
      setTimeout(() => {
        instance.vm.visible = false
      }, 1000)
    }
     else {
      instance.vm.visible = false
    }
  }
  // 保存DOM节点
  instance.dom = instance.vm.$el
  // 将节点填入文档树
  document.body.appendChild(instance.dom)
  instances.push(instance)

  return instance
})()

export default wxLoad
