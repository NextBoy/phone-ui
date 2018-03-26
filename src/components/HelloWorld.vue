<template>
  <div class="hello">
    <confirm v-if="false"></confirm>
    <button @click="notifyFun">notify</button>
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
       console.log( this.$confirm({
         message: '发送成功',
         background: 'rgba(0, 0, 0, 0.8)',
         position: 'bottom',
         font: {
           size: '16px',
           color: 'white'
         }
       })
         .then(() => {console.log(this.msg)})
         .catch(() => {console.log('取消')}))
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
</style>
