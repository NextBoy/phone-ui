<template>
  <transition name="fade">
    <div
      v-show="visible"
      :class="{
        phoneNotification: true,
        top: position === 'top',
        center: position === 'center',
        bottom: position === 'bottom',
        }"
      :style="{backgroundColor: background}"
    >
      <span class="content">{{ message }}</span>
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
      }
    },
    mounted() {
      let self = this
      setTimeout(() => {
        self.visible = false
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
<style scoped>
  /*淡入淡出*/
  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  /*居中*/
  .phoneNotification {
    display: inline-block;
    position: fixed;
    z-index: 1000;
    padding: 10px 15px;
    color: white;
    font-size: 14px;
    border-radius: 4px;
  }
  .center {
    top: 50%;
    left: 50%;
    background-color: rgba(0, 0, 0, .7);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .bottom {
    bottom: 10%;
    left: 50%;
    background-color: rgba(0, 0, 0, .7);
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  .top {
    top: 10%;
    left: 50%;
    background-color: rgba(0, 0, 0, .7);
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
</style>
