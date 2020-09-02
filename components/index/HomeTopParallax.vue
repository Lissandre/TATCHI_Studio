<template>
  <div class="bgTopHome">
    <img src="~assets/images/sphere.png" alt="" />
    <img src="~assets/images/sphere.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'HomeTopParallax',
  // eslint-disable-next-line
  mounted: function() {
    this.parallax()
  },
  methods: {
    parallax() {
      const sizes = {}
      const cursor = {}
      const translate = {}
      let lastScroll = 0
      let valueY = 0
      const imageDiv = document.querySelector('.bgTopHome')
      const img = imageDiv.querySelectorAll('img')
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
      document.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
      })
      document.addEventListener('mousemove', function (e) {
        cursor.top = e.clientY
        cursor.left = e.clientX
        translate.x0 = (cursor.left - sizes.width / 2) / 50
        translate.y0 = (cursor.top - sizes.height / 2) / 45 + valueY
        translate.x1 = -(cursor.left - sizes.width / 2) / 30
        translate.y1 = -(cursor.top - sizes.height / 2) / 30 - valueY
        img[0].style.transform = `translate(${translate.x0}px,${translate.y0}px)`
        img[1].style.transform = `translate(${translate.x1}px,${translate.y1}px)`
      })
      document.addEventListener('scroll', function (e) {
        const dist = window.scrollY
        valueY += (dist - lastScroll) * 0.1
        translate.y0 += (dist - lastScroll) * 0.1
        translate.y1 -= (dist - lastScroll) * 0.1
        img[0].style.transform = `translate(${translate.x0}px,${translate.y0}px)`
        img[1].style.transform = `translate(${translate.x1}px,${translate.y1}px)`
        lastScroll = dist
      })
    },
  },
}
</script>

<style lang="stylus">
.bgTopHome
  z-index -1
  pointer-events none
  & img
    &:first-child
      height 200px
      position absolute
      top 20%
      left 35%
      // transform translateX(-50%)
    &:last-child
      height 400px
      position absolute
      top 30%
      left 41%
      // transform translateX(-50%)
</style>
