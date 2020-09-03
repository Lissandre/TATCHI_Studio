<template>
  <div class="container">
    <div class="topPageHome">
      <HomeTopParallax />
      <h1>Captivez votre audience.</h1>
      <p>
        Chez <strong>Tatchi Studio</strong>, on accompagne les professionnels<br />
        dans la conception de vidéos d'animation très spéciales.
      </p>
      <p>
        Et c'est avec ces vidéos que vous allez pouvoir accrocher votre
        audience.
      </p>
      <button @click="scrollVideo()">
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
    <div class="videoContainer">
      <h2>Un nouveau chapitre commence ici.</h2>
      <div class="centerContainer">
        <div class="video"></div>
      </div>
      <h2>
        Si une image vaut mille mots, un motion <br />
        en vaut … surement beaucoup plus !
      </h2>
    </div>
    <div class="ourPoints">
      <EscalatorComponent
        title="Transparent"
        text="Vous disposez de votre espace de suivi de projet pour connaître à tous moments l’avancé de votre production."
        slug="transparent"
        side="left"
      />
      <EscalatorComponent
        title="R.O.I"
        text="Nos productions sont des outils au service de votre croissance. Chiffres à l’appui."
        slug="roi"
        side="right"
      />
      <EscalatorComponent
        title="Mémorable"
        text="Allégez votre message, le Motion Design retransmettra vos idées de façon claire et mémorisable."
        slug="memorable"
        side="left"
      />
      <EscalatorComponent
        title="Original"
        text="Une création sur mesure pour obtenir toute l’attention de votre audience."
        slug="original"
        side="right"
      />
    </div>
    <div class="formule">
      <h2>La formule.</h2>
      <Formule />
    </div>
    <Avis />
    <BackTop />
  </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'
import HomeTopParallax from '@/components/index/HomeTopParallax'
import EscalatorComponent from '@/components/index/EscalatorComponent'
import Formule from '@/components/index/Formule'
import Avis from '@/components/index/Avis'
import BackTop from '@/components/index/BackTop'
export default {
  components: {
    HomeTopParallax,
    EscalatorComponent,
    Formule,
    Avis,
    BackTop,
  },
  methods: {
    scrollVideo() {
      animateScrollTo(document.querySelector('.videoContainer'), {
        minDuration: 1200,
      })
    },
  },
}
</script>

<style lang="stylus">
.container
  margin 0

.topPageHome
  text-align center
  color #808080
  width 100%
  display flex
  flex-direction column
  justify-content flex-end
  align-items center
  margin-bottom 16%
  & h1
    font-size 56px
    font-weight 200
    margin-bottom 50px
  & p
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
  & button
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
  & img
    height 54px

.videoContainer
  margin-bottom 150px
  & .centerContainer
    display flex
    justify-content center
    margin-bottom 150px
    & .video
      background #fafafa
      height 630px
      width 1124px

.formule
  margin-bottom 300px

h2
  font-size 56px
  font-weight 200
  margin-bottom 100px
</style>
