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
        <p>3<span>sem</span></p>
      </div>
      <p>Le temps de production moyen d'une vidéo explicative</p>
    </div>
    <div class="bloc">
      <div>
        <p>59<span>%</span></p>
      </div>
      <p>
        des cadres préférent découvrir les services d'une société au travers
        d'une vidéo
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexNumbers',
  data() {
    return {}
  },
}
</script>

<style lang="stylus" scoped>
.bloc
  display flex
  align-items flex-end
  justify-content flex-start
  margin 300px 0
  position relative
  &::after
    content ''
    width 900px
    height 900px
    border 3px solid #F0F0F0
    position absolute
    border-radius 50%
    top 50%
    z-index -1
    transform translateY(-40%)
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

@media (max-width: 1024px)
  .bloc
    margin 70px 0
    &::after
      display none
    &:nth-child(2n-1) div
      margin-right 20px
      width 100px
    &:nth-child(2n)
      flex-direction row
      & div
        width 100px
        margin-left 0
        margin-right 20px
      & p
        text-align left
    & div p
      font-size 70px
      letter-spacing -4px
      text-shadow 0px 0px 20px #d2d2d2
      & span
        font-size 20px
    & p
      font-size 16px
      width 100%
</style>
