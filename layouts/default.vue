<template>
  <div id="defaultLayout">
    <Header />
    <Nuxt ref="content" class="content" />
    <BackTop />
    <Footer />
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$strapi.find('motions')
  },
}
</script>

<style lang="stylus">
html
  font-family 'Nexa'
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box

a
  text-decoration none
  color currentColor
*,
*::before,
*::after
  font-family 'Nexa'
  box-sizing border-box
  margin 0

#defaultLayout
  min-height 100vh
  width 100%
  & .content
    margin 0 auto
    min-height 85vh
    box-sizing border-box
    overflow-x hidden
  & .back
    cursor pointer
    display flex
    align-items center
    position absolute
    top 20px
    left 20px
    z-index 2
    & img
      transform translateY(-1px)

::selection
  color #fff
  background #000
  outline-color #000

::-moz-selection
  color #fff
  background #000
  outline-color #000

@media (min-width: 1281px)
  .content
    width 1124px

@media (min-width: 1025px) and (max-width: 1280px)
  .content
    width 100%
    padding 0 20px

@media (min-width: 768px) and (max-width: 1024px)
  .content
    width 100%
    padding 0 20px

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)
  .content
    width 100%
    padding 0 20px

@media (min-width: 481px) and (max-width: 767px)
  .content
    width 100%
    padding 0 20px

@media (min-width: 320px) and (max-width: 480px)
  .content
    width 100%
    padding 0 20px
</style>
