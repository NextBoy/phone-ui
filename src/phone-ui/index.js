import notify from './packages/notify'
import confirm from './packages/confirm'
import loading from './packages/loading'

const components = [
  notify,
  confirm
]

const install = function (Vue, config) {
  components.map(c => Vue.component(c.name, c))
  Vue.prototype.$notify = notify
  Vue.prototype.$confirm = confirm
  Vue.prototype.$loading = loading
  Vue.notify = notify

}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  notify,
  confirm,
  loading
}
