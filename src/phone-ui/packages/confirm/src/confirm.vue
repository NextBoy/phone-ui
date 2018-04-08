<template>
  <transition name="fade">
    <div class="confirm-wrap p-confirm" v-if="visible">
      <!--核心内容-->
      <div class="confirm">
        <h2 class="confirm-title">{{ title }}</h2>
        <div class="btn-wrap">
          <a
            @touchend="cancelFun"
            @touchstart="stopTouchCopy('cancel')"
            :class="{touching: choice === 'cancel'}"
            class="btn-cancel">取消</a>
          <a
            @touchend="sureFun"
            @touchstart="stopTouchCopy('sure')"
            :class="{touching: choice === 'sure'}"
            class="btn-sure">确定</a>
        </div>
      </div>
      <!--黑色遮罩-->
      <div
        @click="cancelFun"
        class="cover"></div>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        choice: ''
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      // 取消
      cancelFun() {
        this.choice = 'false'
        this.visible = false
      },
      // 确定
      sureFun() {
        this.choice = 'true'
        this.visible = false
      },
      // 阻止移动端复制事件触发
      stopTouchCopy(choice) {
        this.choice = choice
        return false
      }
    }
  }
</script>
