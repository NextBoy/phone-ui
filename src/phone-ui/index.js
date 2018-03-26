import notify from './packages/notify'
import confirm from './packages/confirm'

const components = [
  notify,
  confirm
]

const install = function (Vue, config) {
  components.map(c => Vue.component(c.name, c))
  Vue.prototype.$notify = notify
  Vue.prototype.$confirm = confirm
  Vue.notify = notify

}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  notify,
  confirm
}
