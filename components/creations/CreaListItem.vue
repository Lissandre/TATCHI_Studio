<template>
  <nuxt-link
    :key="motion.id"
    :to="{ name: 'creations-slug', params: { slug: motion.slug } }"
    class="creation"
    :style="`background-image: url(${getStrapiMedia(
      motion.cover.formats.medium.url
    )})`"
  >
    <div class="title">
      <h4>
        {{ motion.title }}
      </h4>
    </div>
  </nuxt-link>
</template>

<script>
import { getStrapiMedia } from '@/utils/medias'

export default {
  name: 'CreaListItem',
  props: {
    motion: {
      type: Array,
      default: () => ({}),
    },
  },
  methods: {
    getStrapiMedia,
  },
}
</script>

<style lang="stylus">
.creation
  margin 8px 0
  width 364px
  height 364px
  background-size cover
  background-position center center
  overflow hidden
  &:nth-child(3n)
    transform translateY(50%)
  &:nth-child(3n+1)
    transform translateY(30%)
  & .title
    opacity 0
    will-change opacity
    transition 0.24s opacity ease
    width 100%
    height 100%
    background rgba(255, 255, 255, 0.6)
    display flex
    justify-content center
    align-items center
    & h4
      font-size 24px
      color #000
  &:hover .title
    opacity 1
</style>
