<template>
  <div>
    <div class="bloc">
      <div>
        <p>25<span>sec</span></p>
      </div>
      <p>Le temps qu’il nous faut pour décrire votre activité</p>
    </div>
    <div class="bloc">
      <div>
        <p>76<span>%</span></p>
      </div>
      <p>
        Des dirigeants d’entreprises ayant utilisé la vidéo qui constate un
        impact direct sur les résultats de leur société + les bénéfices sur
        l’image de marque
      </p>
    </div>
    <div class="bloc">
      <div>
        <p>90<span>%</span></p>
      </div>
      <p>C’est ce que retient une personne d’une vidéo contre 10% d’un texte</p>
    </div>
    <div class="bloc">
      <div>
        <p>59<span>%</span></p>
      </div>
      <p>des cadres préfèrent découvrir</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Numbers',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
.bloc
  display flex
  align-items flex-end
  justify-content start
  margin 25% 0
  &:nth-child(2n-1)
    flex-direction row
    & div
      margin-right 100px
    & p
      text-align left
  &:nth-child(2n)
    flex-direction row-reverse
    & div
      margin-left 100px
    & p
      text-align right
  & div
    position relative
    & p
      font-weight 900
      font-size 360px
      letter-spacing -36px
      color #FFFFFF
      text-shadow -20px 20px 60px #E3E3E3
      width fit-content
      vertical-align sub
      line-height 1
      & span
        position relative
        right 5%
        color #575757
        font-weight 600
        font-size 74px
        letter-spacing normal
  & p
    color #D0D0D0
    font-size 24px
    font-weight 600
    width 40%
    transform translateY(36%)
    line-height 1
    vertical-align sub
</style>
