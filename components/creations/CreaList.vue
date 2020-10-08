<template>
  <div class="creations" :class="!mod3 ? 'flexBreak' : ''">
    <CreaListItem
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
export default {
  name: 'CreaList',
  async fetch() {
    this.projects = await this.$strapi.find('motions')
  },
  data() {
    return {
      mod3: true,
      projects: [],
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
</style>
