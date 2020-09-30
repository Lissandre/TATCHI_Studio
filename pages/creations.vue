<template>
  <div>
    <ParallaxCrea />
    <div class="creations" :class="!mod3 ? 'flexBreak' : ''">
      <div class="creation"></div>
      <div class="creation"></div>
      <div class="creation"></div>
      <div class="creation"></div>
      <div class="creation"></div>
      <div class="creation"></div>
      <div class="creation"></div>
      <div class="creation"></div>
      <div class="creation"></div>
    </div>
  </div>
</template>

<script>
import ParallaxCrea from '@/components/creations/ParallaxCrea'
export default {
  name: 'Creations',
  components: {
    ParallaxCrea,
  },
  data() {
    return {
      mod3: true,
    }
  },
}
</script>

<style lang="stylus">
.creations
  display flex
  justify-content space-between
  flex-wrap wrap
  &.flexBreak::after
    content ''
    flex auto
    max-width 364px

.creation
  margin 8px 0
  width 364px
  height 364px
  background #f0f0f0
  &:nth-child(3n)
    transform translateY(50%)
  &:nth-child(3n+1)
    transform translateY(30%)
</style>
