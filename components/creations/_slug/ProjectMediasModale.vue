<template>
  <div v-if="urlModale != ''" class="modale">
    <div class="modaleBackground" @click="urlModale = ''"></div>
    <div class="cross" @click="urlModale = ''"></div>
    <img :src="urlModale" alt="" />
  </div>
</template>

<script>
import preventScroll from 'prevent-scroll'

export default {
  props: {
    urlModale: {
      type: String,
      default: null,
    },
    mediaList: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    urlModale() {
      if (this.urlModale === '') {
        preventScroll.off()
      } else {
        preventScroll.on()
      }
    },
  },
  mounted() {
    console.log(this.urlModale)
  },
}
</script>

<style lang="stylus" scoped>
.modale
  position fixed
  top 0
  left 0
  height 100vh
  width 100%
  display flex
  justify-content center
  align-items center
  z-index 99999

.modaleBackground
  background rgba(0,0,0,0.3)
  position absolute
  top 0
  left 0
  height 100vh
  width 100%

img
  display block
  z-index 2
</style>
