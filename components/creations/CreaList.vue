<template>
  <div class="creations" :class="motions.length % 3 === 0 ? '' : 'flexBreak'">
    <CreaListItem v-for="motion in motions" :key="motion.id" :motion="motion" />
  </div>
</template>

<script>
export default {
  name: 'CreaList',
  async fetch() {
    this.motions = await this.$strapi.find('motions')
  },
  data() {
    return {
      motions: {},
    }
  },
}
</script>

<style lang="stylus" scoped>
.creations
  display flex
  justify-content space-between
  flex-wrap wrap
  margin-bottom 300px
  &.flexBreak::after
    content ''
    flex auto
    max-width 364px

@media (max-width: 1024px)
  .creations
    margin-top 0px
    margin-bottom 150px

@media (max-width: 768px)
  .creations
    margin-top 100px
</style>
