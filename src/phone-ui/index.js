import FastClick from 'fastclick'

FastClick.attach(document.body)

import directive from './directive'

import notify from './packages/notify'
import confirm from './packages/confirm'
import loading from './packages/loading'
import wxLoad from './packages/wxLoad'

const components = [
  notify,
  confirm
]

const install = function (Vue, config) {
  components.map(c => Vue.component(c.name, c))
  Vue.prototype.$notify = notify
  Vue.prototype.$confirm = confirm
  Vue.prototype.$loading = loading
  Vue.prototype.$wxLoad = wxLoad

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
