<template>
  <div class="hello"
       data-touch-distance="150"
       v-touch-direction='{left:notifyFun, right: loadingFun}'>
    <button @click="notifyFun">notify</button>
    <button @click="confirmFun">confirm</button>
    <button @click="loadingFun">loading</button>
    <button @click="wxLoadFun">wxLoad</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      notifyFun() {
        this.$notify('刷新成功')
      },
      confirmFun() {
        this.$confirm('你确定关闭吗')
          .then()
          .catch()
      },
      loadingFun() {
        this.$loading.start()
        setTimeout(() => {
          this.$loading.close()
          this.$notify('刷新成功')
        }, 3000)
      },
      wxLoadFun() {
        this.$wxLoad.start('正在生成订单')
        setTimeout(() => {
          this.$wxLoad.close(true)
          this.$notify({
            message: '无网络连接',
            position: 'bottom',
            duration: 3000,
            background: '#F2F2F2',
            font: {
              color: 'black'
            }
          })
        }, 4000)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .hello {
    width: 100vw;
    height: 500px;
    background-color: yellow;
  }
</style>
