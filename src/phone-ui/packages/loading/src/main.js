import Vue from 'vue';
import Loading from './main.vue'

let LoadingConstructor = Vue.extend(Loading)

let instance // 单个实例
let instances = [] // 多个实例
let seed = 1 // 当前实例下标

const loading = (function () {
  // 如果是服务端则返回
  if (Vue.prototype.$isServer) return 0

  if (seed === 2) {
    return instance
  }
  // 创造实例
  instance = new LoadingConstructor({
    propsData: {}
  })
  // 创建个唯一的id
  let id = 'loading_' + seed
  seed++
  instance.id = id
  // 将挂载的实例保存起来
  instance.vm = instance.$mount()
  // 开始loading
  instance.start = function (type) {
    instance.vm.visible = true
    let types = ['grid', 'ring', 'oval', 'heart', 'audio', 'dot']
    if (type && types.indexOf(type) === -1) {
      type = 'grid'
    }
    instance.vm.type = type || 'grid'
  }
  // 关闭loading
  instance.close = function () {
    instance.vm.visible = false
  }
  // 保存DOM节点
  instance.dom = instance.vm.$el
  // 将节点填入文档树
  document.body.appendChild(instance.dom)
  instances.push(instance)

  return instance
})()

export default loading
