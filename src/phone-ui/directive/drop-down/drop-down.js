import Vue from 'vue'
import {insertDomInHead} from '../../util'
const dropDown = Vue.directive('drop-down', {
  // 当元素插入DOM中时
  inserted: (el, binding) => {
    let dropBlock = null
    let distance = el.getAttribute('data-drop-distance') || 150
    let callback = function () {
    }
    if (binding.value && typeof binding.value === 'function') {
      callback = binding.value
    }
    el.addEventListener('scroll', () => {
      callback()
    }, false)

    //获得角度
    function getAngle(angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    };

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
      let angx = endx - startx;
      let angy = endy - starty;
      let result = 0;

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
      startX = e.touches[0].screenX
      startY = e.touches[0].screenY
    }, false)

    let endX
    let endY
    el.addEventListener('touchmove', (e) => {
      e.preventDefault()
      endX = e.touches[0].screenX
      endY = e.touches[0].screenY

      let direction = getDirection(startX, startY, endX, endY);
      switch (direction) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          if (scrollTop === 0) {
            if (dropBlock === null) {
              // 在头部插入刷新标志
              dropBlock = insertDomInHead(document.body, 'div')
              dropBlock.classList.add('p-drop-block')
              dropBlock.innerText = '松开刷新数据'
            }
            let dropInstance = Math.abs(endY - startY)
            if (dropInstance <= 20) {
              dropBlock.style.height = dropInstance + 'px'
            } else if (dropInstance <= 60) {
              dropInstance = (dropInstance - 20) / 2 + 20
              dropBlock.style.height = dropInstance + 'px'
            } else if (dropInstance <= 90) {
              dropInstance = (dropInstance - 60) / 3 + 35
              dropBlock.style.height = dropInstance + 'px'
            } else {
              dropInstance = (dropInstance - 90) / 5 + 45
              dropBlock.style.height = dropInstance + 'px'
            }
          }
          break;
        case 3:
          break;
        case 4:
          break;
        default:
      }
    }, false)

    el.addEventListener('touchend', (e) => {
      let dropInstance = Math.abs(endY - startY)
      if (dropInstance <= 40) {
        dropBlock.style.transition = '0.5s'
        dropBlock.style.height = 0 + 'px'
        setTimeout(() => {
          dropBlock.style.transition = '0s'
        }, 500)

        return 0
      }
      if (dropBlock !== null) {
        dropBlock.innerText = '刷新数据中'
        let promise = new Promise((resolve) => {
          setTimeout(() => {resolve()}, 1000)
        })
        promise
          .then(() => {
            dropBlock.innerText = '刷新成功'
            dropBlock.innerText = ''
            dropBlock.style.transition = '0.5s'
            dropBlock.style.height = 0 + 'px'
            setTimeout(() => {
              dropBlock.style.transition = '0s'
            }, 500)
          })
          .catch()
      }
    }, false)
  }
})

export default dropDown
