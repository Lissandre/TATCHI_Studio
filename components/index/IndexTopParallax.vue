<template>
  <div class="bgTopHome">
    <div class="spheres"></div>
    <div class="spheres"></div>
  </div>
</template>

<script>
export default {
  name: 'IndexTopParallax',
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
      const img = imageDiv.querySelectorAll('.spheres')
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
      document.addEventListener('mouseleave', function () {
        img[0].style.transform = `translate(0px,${valueY}px)`
        img[1].style.transform = `translate(0px,${-valueY}px)`
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.bgTopHome
  z-index -1
  pointer-events none
  position absolute
  width 100%
  height 100%
  overflow-x hidden
  top 0
  left 0

.spheres
  background-color #f0f0f0
  border-radius 50%
  box-shadow -1px -3px 8px #ffffff inset, 20px 10px 30px rgba(255,255,255,0.6) inset, -15px -40px 80px rgba(0,0,0,0.3) inset
  transition 0.3s transform ease-out
  will-change transform
  &:first-child
    height 200px
    width 200px
    position absolute
    top 20vh
    left 35%
  &:last-child
    height 400px
    width 400px
    position absolute
    top 30vh
    left 41%

@media (max-width: 768px)
  .spheres
    &:first-child
      left 17%
    &:last-child
      left 20%
</style>
