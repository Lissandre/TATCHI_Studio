<template>
  <div>
    <h1>{{ project.title }}</h1>
    <h3>Type de projet / {{ project.project_type }}</h3>
    <!-- eslint-disable -->
    <div
      class="projectDescription"
      v-html="$md.render(project.description)"
    ></div>
    <!-- eslint-enable -->
    <div class="infos">
      <div class="info">
        <span>Équipe</span>
        <span>{{ project.team_members }}</span>
      </div>
      <div class="info">
        <span>Durée de conception</span>
        <span>{{ project.conception_duration }}</span>
      </div>
      <div class="info">
        <span>Type de Motion Design</span>
        <span>{{ project.md_type }}</span>
      </div>
      <div class="info">
        <span>Année</span>
        <span>{{ moment(project.created_at).format('YYYY') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ProjectTopInfo',
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    moment,
  },
}
</script>

<style lang="stylus" scoped>
h1
  color #E3E3E3
  font-weight 700
  text-transform uppercase
  font-size 60px

h3
  color #808080
  font-weight 700
  text-transform uppercase
  font-size 15px
  margin-bottom 50px

.projectDescription
  color #808080
  font-weight 400
  font-size 15px
  margin-bottom 50px

.infos
  height 60px
  margin-bottom 100px
  & .info
    display inline-block
    height 100%
    border-left 3px solid #E3E3E3
    margin-right 64px
    padding-left 20px
    padding-top 8px
    & span
      display block
      font-size 13px
      font-weight 800
      &:first-child
        color #575757
      &:last-child
        color #808080
</style>
