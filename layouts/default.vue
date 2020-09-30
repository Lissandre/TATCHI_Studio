<template>
  <div id="defaultLayout">
    <Header />
    <Nuxt class="content" />
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


.default-enter
	& ~ .overlay-right
		width 100vw
.default-enter-active ~ .overlay-right, .default-leave-active ~ .overlay-right
	width 100vw
.default-enter-active
	& ~ .overlay-right
		transition-timing-function ease-in
.default-enter-active ~ .overlay-right, .default-enter-to ~ .overlay-right
	display none
.default-enter-to
	& ~ .overlay-left
		width 0
.default-leave-active
	& ~ .overlay-left
		transition-timing-function ease
.default-enter ~ .overlay-left, .default-enter-active ~ .overlay-left, .default-enter-to ~ .overlay-left
	transition-duration unset !important
	width 100vw
.default-enter-active, .default-leave-active
	transition-duration 0.35s


// .default-enter ~ .overlay-right {
//   width: 100vw;
// }

// .default-enter-active ~ .overlay-right,
// .default-leave-active ~ .overlay-right {
//   width: 100vw;
// }

// .default-enter-active ~ .overlay-right {
//   transition-timing-function: ease-in;
// }

// .default-enter-active ~ .overlay-right,
// .default-enter-to ~ .overlay-right {
//   display: none;
// }

// .default-enter-to ~ .overlay-left {
//   width: 0;
// }

// .default-leave-active ~ .overlay-left {
//   transition-timing-function: ease;
// }

// .default-enter ~ .overlay-left,
// .default-enter-active ~ .overlay-left,
// .default-enter-to ~ .overlay-left {
//   transition-duration: unset !important;
//   width: 100vw;
// }

// .default-enter-active,
// .default-leave-active {
//   transition-duration: 0.35s;
// }
</style>
