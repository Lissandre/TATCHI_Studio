<template>
  <div class="topPageHome">
    <IndexTopParallax />
    <h1>Captivez votre audience.</h1>
    <p>
      Chez <strong>Tatchi Studio</strong>, on accompagne les professionnels<br />
      dans la conception de vidéos d'animation très spéciales.
    </p>
    <p>
      Et c'est avec ces vidéos que vous allez pouvoir accrocher votre audience.
    </p>
    <button @click="play(), scrollVideo()">
      La preuve
    </button>
    <p class="sub">
      Spécialisés dans la réalisation de Motion Design 2D et 3D
    </p>
    <img
      src="~assets/images/logos/tatchi_studio.svg"
      alt=""
      class="tatchiStudioLogo"
    />
  </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'
export default {
  name: 'IndexTop',
  methods: {
    scrollVideo() {
      animateScrollTo(document.querySelector('.videoContainer'), {
        minDuration: 1200,
      })
    },
    play() {
      this.$root.$refs.play.play()
    },
  },
}
</script>

<style lang="stylus" scoped>
.topPageHome
  text-align center
  color #808080
  width 100%
  display flex
  flex-direction column
  justify-content flex-end
  align-items center
  margin-bottom 16%
h1
  font-size 56px
  font-weight 200
  margin-bottom 50px
p
  font-size 26px
  font-weight normal
  margin-bottom 50px
  & strong
    color #575757
    font-weight normal
    text-transform uppercase
  &.sub
    font-size 16px
    margin-bottom 90px
button
  background #575757
  border none
  padding 15px 90px
  border-radius 5px
  box-shadow 0px 13px 26px rgba(0, 0, 0, 0.482)
  margin-bottom 96px
  color #d0d0d0
  font-weight bold
  font-size 16px
  cursor pointer
  outline none
  transition 0.42s transform ease
  &:hover
    transform scale(0.96)
img
  height 54px
</style>
