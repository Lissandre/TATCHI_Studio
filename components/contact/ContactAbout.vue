<template>
  <div class="contactTexts">
    <div>
      <p>Qui sommes-nous</p>
      <p>
        Basé aux portes de Paris, Tatchi Studio vous accompagne dans la
        réalisation de vos vidéos d'animation ou "Motion design". <br />
        Composée d'une équipe fraiche et réactive, Tatchi Studio anime votre
        projet afin de le rendre accessible à tout votre auditoire.
      </p>
    </div>
    <div>
      <p>Contactez-nous</p>
      <p>
        Adresse postale : 47 rue de la Ferme, 93100 Montreuil <br />
        Téléphone : 01 43 60 88 88
      </p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.contactTexts
  margin-top 500px
  & div
    display flex
    justify-content space-between
    margin-bottom 50px
p
  &:first-child
    color #d0d0d0
    line-height 40px
    font-size 20px
  &:last-child
    color #808080
    line-height 40px
    font-size 20px
    width 80%

@media (max-width: 1024px)
  .contactTexts
    margin-top 200px
    & div
      flex-direction column
  p:last-child
    width 100%
</style>
