<template>
  <div id="defaultLayout">
    <Header />
    <Nuxt class="content" />
    <Footer />
  </div>
</template>

<style lang="stylus">
html
  font-family 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif
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
  & .content
    padding 0 16%
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
