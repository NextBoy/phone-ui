<template>
  <transition name="fade">
    <div class="p-wxLoad-wrap" v-if="visible">
      <!--loading动画-->
      <div class="p-wxLoad-ani">
        <!--css3 loading 动画-->
        <div class="p-4-1-loading" v-if="!loadRes"></div>
        <div class="p-wxLoad-check" v-else></div>
        <p :class="{wxLoadHidden: loadRes}">{{ message }}</p>
      </div>
      <!--透明的遮罩层-->
      <div class="p-cover" style="background-color: transparent"></div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'wxLoadComponent',
    data () {
      return {
        loadRes: false,
        visible: false,
        message: ''
      }
    }
  }
</script>
