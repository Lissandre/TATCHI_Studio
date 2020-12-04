<template>
  <Typeform
    url="https://ao-solutions.typeform.com/to/WLi8Vebg"
    :hide-headers="true"
    :hide-footer="true"
    :hide-scrolbars="true"
    :opacity="0"
    class="typeform"
  />
</template>

<script>
export default {
  layout: 'typeform',
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

<style lang="stylus" scoped>
.typeform
  height 100vh
  width 100%
</style>
