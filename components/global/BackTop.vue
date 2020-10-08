<template>
  <div>
    <div class="backTop" @click="toTop()">
      <span>Back</span>
    </div>
  </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'
export default {
  name: 'BackTop',
  methods: {
    toTop() {
      animateScrollTo(0)
    },
  },
}
</script>

<style lang="stylus">
.backTop
  display flex
  justify-content center
  position relative
  margin-top 200px
  margin-bottom 100px
  cursor pointer
  & span
    padding 20px 50px
    display inline-block
    border-top 1px solid #707070
    color #808080
    font-weight bold
    font-size 15px
    text-transform uppercase
  &::before
    content ""
    width 0
    height 0
    border-top 10px solid transparent
    border-bottom 10px solid #707070
    border-right 10px solid transparent
    border-left 10px solid transparent
    position absolute
    top -50%
    left 50%
    transform translateX(-50%)
</style>
