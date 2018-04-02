<template>
  <div
    v-if="visible"
    class="p-loading">
    <img  v-if="type === 'audio'" class="svg-loader" src="./svg-loaders/audio.svg" alt="">
    <img  v-else-if="type === 'heart'" class="svg-loader" src="./svg-loaders/hearts.svg" alt="">
    <img  v-else-if="type === 'grid'" class="svg-loader" src="./svg-loaders/grid.svg" alt="">
    <img  v-else-if="type === 'oval'" class="svg-loader" src="./svg-loaders/oval.svg" alt="">
    <img  v-else-if="type === 'ring'" class="svg-loader" src="./svg-loaders/rings.svg" alt="">
    <img  v-else-if="type === 'dot'" class="svg-loader" src="./svg-loaders/three-dots.svg" alt="">
    <!--蒙层-->
    <div class="cover"></div>
  </div>
</template>
<script>
  export default {
    name: 'loading',
    data () {
      return {
        visible: false,
        type: 'grid'
      }
    }
  }
</script>
