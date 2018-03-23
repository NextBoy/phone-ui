import notify from './notify'
import confirm from './confirm'

const components = [
  notify,
  confirm
]

export default function (Vue, config) {
  components.map(c => Vue.component(c.name, c))
  Vue.prototype.$notify = notify
  Vue.prototype.$confirm = confirm
  Vue.notify = notify
  Vue.confirm = confirm

}
