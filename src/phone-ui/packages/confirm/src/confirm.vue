<template>
  <div class="confirm-wrap" v-if="visible">
    <!--核心内容-->
    <div class="confirm">
      <h2 class="confirm-title">你确定要退出吗吗</h2>
      <div class="btn-wrap">
        <span class="btn-cancel" @click="cancel(false)">取消</span>
        <span class="btn-sure" @click="cancel(true)">确定</span>
      </div>
    </div>
    <!--黑色遮罩-->
    <div class="cover"></div>
  </div>
</template>
<script>
  export default {
    name: 'confirmComponent',
    data () {
      return {
        visible: false,
        choice: false
      }
    },
    methods: {
      cancel(val) {
        if (val) {
          this.choice = 'true'
        } else {
          this.choice = 'false'
        }
        this.visible = false
      }
    }
  }
</script>
<style scoped>
  .cover {
    position: fixed;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .confirm {
    box-sizing: border-box;
    position: fixed;
    z-index: 1100;
    top: 50%;
    left: 50%;
    width: 80vw;
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
    line-height: 1.5;
    padding: 5px 10px;
  }

  /*按钮*/
  .btn-wrap {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .btn-sure, .btn-cancel {
    flex: 1;
    line-height: 2;
  }

</style>
