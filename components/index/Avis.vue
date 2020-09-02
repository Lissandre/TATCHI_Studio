<template>
  <div class="container">
    <div class="slider">
      <div class="leftArrow" @click="changeAvis(-1)"></div>
      <div class="avis">
        <h5>
          <span>
            {{ avis.name[count - 1] }}
          </span>
          « {{ avis.shortDesc[count - 1] }} »
        </h5>
        <p>
          {{ avis.text[count - 1] }}
        </p>
      </div>
      <div class="rightArrow" @click="changeAvis(+1)"></div>
    </div>
    <p class="count">{{ count }} <span>/</span> {{ total }}</p>
  </div>
</template>

<script>
export default {
  name: 'Avis',
  data() {
    return {
      count: 1,
      total: 2,
      avis: {
        name: ['Aimé Césaire', 'Le Dev'],
        shortDesc: [
          'Projet patati fait le patata',
          'Au moins, il y a un rendu',
        ],
        text: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
        ],
      },
    }
  },
  methods: {
    changeAvis(value) {
      if (value === -1) {
        this.count + value < 1 ? (this.count = this.total) : this.count--
      } else {
        this.count + value > this.total ? (this.count = 1) : this.count++
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction column
  align-items center
  & .slider
    width 1000px
    display flex
    align-items center
    justify-content space-between
    margin-bottom 67px
    & .avis
      text-align center
      & h5
        font-weight bolder
        font-size 20px
        color #d0d0d0
        margin-bottom 50px
        & span
          color #575757
      & p
        font-weight bold
        font-size 15px
        color #808080
        width 846px
        letter-spacing 0.3px
        line-height 30px

.rightArrow
  width 0
  height 0
  border-top 10px solid transparent
  border-bottom 10px solid transparent
  border-left 10px solid #D0D0D0

.leftArrow
  width 0
  height 0
  border-top 10px solid transparent
  border-bottom 10px solid transparent
  border-right 10px solid #D0D0D0

.count
  color #d0d0d0
  font-size 15px
  font-weight bold
  & span
    color #f0f0f0
    font-size 18px
    font-weight bolder
</style>
