<template>
  <div class="errorcontainer">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Retour à l'accueil</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  layout: 'error',
}
</script>

<style lang="stylus" scoped>
h1
  text-align center
  margin-bottom 60px
a
  display block
  text-align center
</style>
