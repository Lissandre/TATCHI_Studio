<template>
  <div :class="'escComponent ' + side">
    <div>
      <h3>{{ title }}</h3>
      <p>{{ text }}</p>
      <a href="#">Lorem</a>
    </div>
    <div :class="'animation ' + slug">
      <!-- {{ animation }} -->
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  name: 'IndexOurPointsBox',
  props: {
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    slug: {
      type: String,
      default: null,
    },
    side: {
      type: String,
      default: null,
    },
  },
  // eslint-disable-next-line
  mounted: function() {
    lottie.loadAnimation({
      container: document.querySelector('.animation.' + this.slug), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('@/assets/svg_anim/' + this.slug + 'Anim.json'), // the path to the animation json
      rendererSettings: {
        preserveAspectRatio:
          this.side === 'left' ? 'xMinYMid meet' : 'xMaxYMid meet',
      },
    })
  },
}
</script>

<style lang="stylus">
.escComponent
  display flex
  margin-bottom 120px
  & h3
    font-size 26px
    font-weight bolder
    color #575757
    margin-bottom 25px
  & p
    font-size 14px
    color #808080
    width 300px
    margin-bottom 30px
  & a
    display inline-block
    font-size 14px
    color #d0d0d0
    padding 12px 72px
    border 1px solid #d0d0d0
    border-radius 5px
  & .animation
    width 200px
    overflow hidden
    opacity 0.5
    margin 0 30px
    & svg
      transform scale(1.5) !important
      will-change transform
    &.memorable svg
      transform scale(3) !important
      will-change transform
  &.right
    flex-direction row-reverse
  &.left
    flex-direction row
</style>
