import main from './confirm.vue'
import Vue from 'vue'

let confirmConstructor = Vue.extend(main)

let instance
const confirm = function (options) {
  if( Vue.prototype.$isServer ) return 0
  let config = {}
  config = options || {}

  instance = new confirmConstructor({
    propsData: config
  })
  instance.vm = instance.$mount()
  instance.dom = instance.vm.$el
  document.body.appendChild(instance.dom)
  instance.vm.visible = true

  return instance.vm
}


export default confirm
