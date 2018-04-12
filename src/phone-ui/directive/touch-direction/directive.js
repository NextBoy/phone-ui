import Vue from 'vue'

const touchDirection = Vue.directive('touch-direction', {
  inserted: (el, binding) => {
    let distance = el.getAttribute('data-touch-distance') || 150
    distance = Number(distance)
    let callbackObj = binding.value || {}
    //获得角度
    function getAngle(angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    };

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
      let angx = endx - startx;
      let angy = endy - starty;
      let result = 0;

      //如果滑动距离太短
      if (Math.abs(angx) < distance && Math.abs(angy) < distance) {
        return result;
      }

      let angle = getAngle(angx, angy);
      if (angle >= -135 && angle <= -45) {
        result = 1;
      } else if (angle > 45 && angle < 135) {
        result = 2;
      } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
      } else if (angle >= -45 && angle <= 45) {
        result = 4;
      }

      return result;
    }

    let startX
    let startY
    el.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX
      startY = e.touches[0].pageY
    }, false)

    let endX
    let endY
    el.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].pageX
      endY = e.changedTouches[0].pageY

      let direction = getDirection(startX, startY, endX, endY);
      switch (direction) {
        case 0:
          break;
        case 1:
          if (callbackObj.up) {
            callbackObj.up()
          }
          break;
        case 2:
          if (callbackObj.down) {
            callbackObj.down()
          }
          break;
        case 3:
          if (callbackObj.left) {
            callbackObj.left()
          }
          break;
        case 4:
          if (callbackObj.right) {
            callbackObj.right()
          }
          break;
        default:
      }
    }, false)
  }
})

export default touchDirection
