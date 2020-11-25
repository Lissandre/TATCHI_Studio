<template>
  <div class="container">
    <CreaTop />
    <!-- <CreaFilters /> -->
    <CreaList />
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
            'chez tatchi studio, nous travaillons dur pour transmettre le meilleur de vos projets.',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.container
  box-sizing content-box
</style>
