<template>
  <transition name="fade">
    <div class="confirm-wrap" v-if="visible">
      <!--核心内容-->
      <div class="confirm">
        <h2 class="confirm-title">你确定要退出吗吗你确定要退出吗吗你确定要退出吗吗你确定要退出吗吗</h2>
        <div class="btn-wrap">
        <span
          @touchend="cancelFun"
          @touchstart="choice = 'cancel'"
          :class="{touching: choice === 'cancel'}"
          class="btn-cancel">取消</span>
          <span
            @touchend="sureFun"
            @touchstart="choice = 'sure'"
            :class="{touching: choice === 'sure'}"
            class="btn-sure">确定</span>
        </div>
      </div>
      <!--黑色遮罩-->
      <div class="cover"></div>
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
      success: {
        type: Function,
        default: function () {}
      }
    },
    methods: {
      // 取消
      cancelFun() {
        this.choice = ''
        this.visible = false
      },
      // 确定
      sureFun() {
        this.choice = ''
        this.visible = false
        this.success()
      }
    }
  }
</script>
<style scoped>
  .touching {
    background-color: aliceblue;
  }

  /*淡入淡出*/
  .fade-enter-active {
    transition: opacity .2s;
  }

  .fade-leave-active {
    transition: opacity .1s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }

  .cover {
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .confirm {
    box-sizing: border-box;
    position: fixed;
    z-index: 1100;
    top: 50%;
    left: 50%;
    width: 80vw;
    max-width: 300px;
    background-color: white;
    border-radius: 8px;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .confirm-title {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 2;
    padding: 5px 10px 0 10px;
  }

  /*按钮*/
  .btn-wrap {
    font-size: 0;
    overflow: hidden;
  }

  .btn-wrap::before {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: rgba(0, 0, 0, .3);
    transform: scaleY(.5);
  }

  .btn-sure, .btn-cancel {
    display: inline-block;
    text-align: center;
    width: 50%;
    font-size: 14px;
    line-height: 3;
    overflow: hidden;
  }
</style>
