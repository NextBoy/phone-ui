<template>
  <div class="hello">
    <confirm></confirm>
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
        this.$notify('无敌是多么寂寞敌是多么寂寞啊敌是多么寂寞啊敌是多么寂寞啊敌是多么寂寞啊啊哈哈')
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
