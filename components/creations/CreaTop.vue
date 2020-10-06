<template>
  <div class="container">
    <CreaTopParallax />
    <div class="arrowBottom" @click="goDown()"></div>
  </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'
export default {
  name: 'CreaTop',
  methods: {
    goDown() {
      animateScrollTo(document.querySelector('.creaFilters'), {
        minDuration: 1200,
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.arrowBottom
  width 0
  height 0
  border-top 10px solid #707070
  border-bottom 10px solid transparent
  border-right 10px solid transparent
  border-left 10px solid transparent
  position absolute
  top 95%
  left 50%
  transform translateX(-50%)
  cursor pointer
</style>
