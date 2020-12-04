<template>
  <div>
    <IndexTop />
    <IndexClients />
    <IndexPlayer />
    <IndexOurPoints />
    <IndexNumbers />
    <nuxt-link to="production" class="ctaLink"
      >Je veux un premier contact</nuxt-link
    >
    <IndexFormule />
    <IndexReviews v-if="reviews != null" :reviews="reviews" />
  </div>
</template>

<script>
export default {
  async fetch() {
    this.reviews = await this.$strapi.find('tatchi-studio-reviews')
  },
  data() {
    return {
      reviews: null,
    }
  },
  head() {
    return {
      titre: 'TATCHI Studio - Création de motion design',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'tatchi studio est une agence de création de motion design. Nous décrivons votre projet en une vidéo.',
        },
      ],
    }
  },
}
</script>

<style lang="stylus">
h2
  font-size 56px
  font-weight 300
  margin-bottom 100px
  color #575757
.ctaLink
  display block
  background #575757
  border none
  padding 15px 0
  text-align center
  border-radius 5px
  box-shadow 0px 13px 26px rgba(0, 0, 0, 0.482)
  margin 0 auto
  width 300px
  color #d0d0d0
  font-weight bold
  font-size 16px
  cursor pointer
  outline none
  transition 0.42s transform ease
  &:hover
    transform scale(0.96)
@media (max-width: 1024px)
  h2
    font-size 42px
    margin-bottom 60px
  .desktop
    display none
</style>
