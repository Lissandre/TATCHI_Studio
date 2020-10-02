<template>
  <div class="formule">
    <h2>La formule.</h2>
    <div class="formulePoints">
      <div class="formulePoint">
        <h4>1. Brief</h4>
        <p>Une bonne conversation s'impose</p>
      </div>
      <div class="middle">
        <div class="formulePoint">
          <h4>2. Scénario</h4>
          <p>Écrivons votre histoire</p>
        </div>
        <div class="formulePoint">
          <h4>3. Illustration</h4>
          <p>Nos meilleurs coups de crayons</p>
        </div>
      </div>
      <div class="formulePoint last">
        <h4>4. Animation</h4>
        <p>Maintenant, il faut que ça bouge !</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexFormule',
}
</script>

<style lang="stylus" scoped>
.formule
  margin-bottom 300px
.formulePoints
  padding-top 100px
  display flex
  flex-direction column
  align-items center
  position relative
  & .formulePoint
    text-align center
    position relative
    & h4
      text-transform uppercase
      color #575757
      font-size 18px
      font-weight bolder
      margin-bottom 16px
    & p
      color #808080
      font-weight bold
      font-size 14px
  & .middle
    width 1000px
    display flex
    justify-content space-between
    position relative
    padding 0 16%
    margin 16% 0
    & .formulePoint
      position static

.last::before
  content ""
  width 600px
  height 600px
  border 2px solid #f0f0f0
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -65%)
  border-radius 50%
  z-index -1

.middle::before
  content ""
  width 600px
  height 600px
  border 2px solid #f0f0f0
  position absolute
  top 50%
  left 0%
  transform translateY(-65%)
  border-radius 50%
  z-index -1

.middle::after
  content ""
  width 600px
  height 600px
  border 2px solid #f0f0f0
  position absolute
  top 50%
  right 0%
  transform translateY(-65%)
  border-radius 50%
  z-index -1
</style>
