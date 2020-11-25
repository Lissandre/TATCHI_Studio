<template>
  <div>
    <IndexTop />
    <IndexClients />
    <IndexPlayer />
    <IndexOurPoints />
    <IndexNumbers />
    <IndexFormule />
    <IndexReviews />
  </div>
</template>

<script>
export default {
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
@media (max-width: 1024px)
  h2
    font-size 42px
    margin-bottom 60px
  .desktop
    display none
</style>
