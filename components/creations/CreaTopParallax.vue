<template>
  <div class="creaTop">
    <h1>Créations</h1>
    <div class="parallax">
      <div class="spheres">
        <div class="sphere"></div>
        <div class="sphere"></div>
      </div>
      <img src="~assets/images/rec.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreaTopParallax',
  data() {
    return {
      translate: {
        x0: 0,
        x1: 0,
        x2: 0,
        y0: 0,
        y1: 0,
        y2: 0,
      },
    }
  },
  // eslint-disable-next-line
  mounted: function() {
    this.parallax()
  },
  methods: {
    parallax() {
      const sizes = {}
      const cursor = {}
      const translate = this.translate
      let lastScroll = 0
      let valueY = 0
      let valueYObj = 0
      const parallax = document.querySelector('.parallax')
      const imageDiv = parallax.querySelector('.spheres')
      const img = imageDiv.querySelectorAll('.sphere')
      const object = parallax.querySelector('img')
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight
      document.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
      })
      document.addEventListener('mousemove', function (e) {
        cursor.top = e.clientY
        cursor.left = e.clientX
        translate.x0 = (cursor.left - sizes.width / 2) / 70
        translate.y0 = (cursor.top - sizes.height / 2) / 65 + valueY
        translate.x1 = -(cursor.left - sizes.width / 2) / 50
        translate.y1 = -(cursor.top - sizes.height / 2) / 50 - valueY
        translate.x2 = (cursor.left - sizes.width / 2) / 25
        translate.y2 = (cursor.top - sizes.height / 2) / 35 - valueYObj
        img[0].style.transform = `translate(${translate.x0}px,${translate.y0}px)`
        img[1].style.transform = `translate(${translate.x1}px,${translate.y1}px)`
        object.style.transform = `translate(${translate.x2}px,${translate.y2}px)`
      })
      document.addEventListener('scroll', function (e) {
        const dist = window.scrollY
        valueY += (dist - lastScroll) * 0.05
        valueYObj += (dist - lastScroll) * 0.1
        translate.y0 += (dist - lastScroll) * 0.05
        translate.y1 -= (dist - lastScroll) * 0.05
        translate.y2 -= (dist - lastScroll) * 0.1
        img[0].style.transform = `translate(${translate.x0}px,${translate.y0}px)`
        img[1].style.transform = `translate(${translate.x1}px,${translate.y1}px)`
        object.style.transform = `translate(${translate.x2}px,${translate.y2}px)`
        lastScroll = dist
      })
      document.addEventListener('mouseleave', function () {
        img[0].style.transform = `translate(0px,${valueY}px)`
        img[1].style.transform = `translate(0px,${-valueY}px)`
        object.style.transform = `translate(0px,${-valueY}px)`
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.creaTop
  & h1
    text-transform uppercase
    color #D0D0D0
    font-size 90px
    font-weight bold
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    z-index 2

.parallax
  height 80vh
  display flex
  justify-content center
  z-index -1
  & img
    height 70%
    transform translateY(4%)
    z-index 0
    will-change transform
    transition 0.3s transform ease-out

.spheres
  width 300px
  height 300px
  position absolute
  transform translateX(-40%)
  z-index 1
  & .sphere
    background-color #f0f0f0
    border-radius 50%
    box-shadow -1px -3px 8px #ffffff inset, 10px 5px 20px rgba(255,255,255,0.6) inset, -10px -20px 25px rgba(0,0,0,0.2) inset
    transition 0.3s transform ease-out
    will-change transform
    &:first-child
      height 110px
      width 110px
      position absolute
      left 45%
    &:last-child
      height 150px
      width 150px
      position absolute
      top 20%
      left 15%
      z-index 2

@media (max-width: 768px)
  .spheres
    & .sphere:first-child
      top 50%
      left 35%
    & .sphere:last-child
      top 70%
      left 10%
  .parallax img
    height 60%
    position absolute
    top 20%
  .creaTop
    position relative
    & h1
      transform translate(-50%, -100%)
      font-size 50px
</style>
