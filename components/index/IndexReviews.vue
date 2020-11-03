<template>
  <div class="container">
    <div class="box">
      <div class="arrowContainer" @click="changeReview(-1)">
        <div class="leftArrow"></div>
      </div>
      <div class="slider">
        <div class="review">
          <h5>
            <span>
              {{ review.name[count - 1] }}
            </span>
            « {{ review.shortDesc[count - 1] }} »
          </h5>
          <p>
            {{ review.text[count - 1] }}
          </p>
        </div>
      </div>
      <div class="arrowContainer" @click="changeReview(+1)">
        <div class="rightArrow"></div>
      </div>
    </div>
    <p class="count">{{ count }} <span>/</span> {{ total }}</p>
  </div>
</template>

<script>
export default {
  name: 'IndexReviews',
  data() {
    return {
      count: 1,
      total: 2,
      review: {
        name: ['Jean Marc Zerad', 'Stéphane Goncalves'],
        shortDesc: [
          'CEO chez MZ Technologie',
          "Responsable d'exploitation chez NPP",
        ],
        text: [
          "Tatchi a répondu au pied levé à notre demande. Ils ont restitué à l'image la vision que j'avais pour mon projet.",
          "L'équipe a reussi à mettre en valeur mon idée de départ sans dénaturer notre marque de fabrique. Je suis fier d'avoir une animation d'une telle qualité pour présenter notre activité.",
        ],
      },
    }
  },
  methods: {
    changeReview(value) {
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
.box
  display flex
  align-items stretch
  justify-content space-between
  & .slider
    display flex
    flex-direction column
    align-items center
    width 1000px
    display flex
    align-items center
    justify-content space-between
    margin-bottom 67px
    height auto
    & .review
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

.arrowContainer
  display flex
  align-items center

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

@media (max-width: 1024px)
  .container .slider
    width 90%
    & .review
      & p
        width 90%
        margin 0 auto
      & h5 span
        display block
</style>
