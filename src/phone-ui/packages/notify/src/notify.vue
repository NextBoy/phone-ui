<template>
  <transition name="notify-fade">
    <div class="notify">
      <div
        v-show="visible"
        :class="{
        phoneNotification: true,
        top: position === 'top',
        center: position === 'center',
        bottom: position === 'bottom',
        }"
        :style="{backgroundColor: background, fontSize: font.size, color: font.color}"
      >
        <span class="content">{{ message }}</span>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'Notification',
    props: {
      message: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'center'
      },
      background: {
        type: String,
        default: 'rgba(0, 0, 0, 0.7)'
      },
      duration: {
        type: Number,
        default: 1500
      },
      font: {
        type: Object,
        default: {
          size: '16px',
          color: 'white'
        }
      }
    },
    mounted() {
      let self = this
      setTimeout(() => {
        self.visible = false
        document.body.removeChild(self.dom)
      }, self.duration)
    },
    data() {
      return {
        visible: true
      }
    },
    created() {
    },
    methods: {}
  }
</script>
