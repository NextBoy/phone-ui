import Vue from 'vue';
import confirmComponent from './confirm.vue'

let confirmConstructor = Vue.extend(confirmComponent)

let instance // 单个实例
let instances = [] // 多个实例
let seed = 1 // 当前实例下标

const confirm = function (options) {
  // 如果是服务端则返回
  if (Vue.prototype.$isServer) return 0
  let config = {}
  config = options || {}
  // 创造实例
  instance = new confirmConstructor({
    propsData: config
  })
  // 创建个唯一的id
  let id = 'confirm_' + seed
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

  let promise = new Promise((resolve, reject) => {
      let timer = setInterval(() => {
        if (instance.vm.choice === 'true') {
          console.log(1)
          clearInterval(timer)
          resolve()
        } else if (instance.vm.choice === 'false') {
          console.log(2)
          clearInterval(timer)
          reject()
        }
      }, 50)
  })
  return promise
}

export default confirm
