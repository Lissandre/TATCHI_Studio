<template>
  <div id="defaultLayout">
    <Header />
    <Nuxt class="content" />
    <BackTop />
    <Footer />
  </div>
</template>

<script>
export default {}
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
  box-sizing border-box
  margin 0

#defaultLayout
  height 100vh
  width 100%
  & .content
    // padding 0 16%
    width 1124px
    margin 0 auto
    min-height 95vh

::selection
  color #fff
  background #000
  outline-color #000

::-moz-selection
  color #fff
  background #000
  outline-color #000
</style>
