import Vue from 'vue';
import Notification from './notify.vue'

let NotificationConstructor = Vue.extend(Notification)

let instance // 单个实例
let instances = [] // 多个实例
let seed = 1 // 当前实例下标

const notify = function (options) {
  // 如果是服务端则返回
  if (Vue.prototype.$isServer) return 0
  let config = {}
  if (typeof options === 'string') {
    config.message = options
  } else {
    config = options
  }
  let defaultConfig = {
    position: 'center',
    background: 'rgba(0, 0, 0, .7)',
    duration: 1500,
    font: {
      size: '16px',
      color: 'white'
    }
  }
  config = Object.assign(defaultConfig, config)
  // 创造实例
  instance = new NotificationConstructor({
    propsData: config
  })
  // 创建个唯一的id
  let id = 'notify_' + seed
  seed++
  instance.id = id
  // 将挂载的实例保存起来
  instance.vm = instance.$mount()
  // 保存DOM节点
  instance.dom = instance.vm.$el
  // 将节点填入文档树
  document.body.appendChild(instance.dom)
  instance.vm.visible = true
  instances.push(instance)

  return instance
}

export default notify
