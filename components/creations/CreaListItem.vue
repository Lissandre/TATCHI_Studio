<template>
  <nuxt-link
    :key="motion.id"
    ref="creation"
    :to="{ name: 'creations-slug', params: { slug: motion.slug } }"
    class="creation"
    :style="`background-image: url(${background})`"
    loading="lazy"
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
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      background: getStrapiMedia(this.motion.cover.formats.thumbnail.url),
    }
  },
  mounted() {
    const projects = document.querySelectorAll('.creation')
    projects.forEach((project) => {
      project.style.height = `${project.offsetWidth}px`
    })
    window.addEventListener('resize', () => {
      projects.forEach((project) => {
        project.style.height = `${project.offsetWidth}px`
      })
    })
    if (this.motion.cover.formats.medium) {
      const mediumBackground = new Image()
      mediumBackground.src = getStrapiMedia(
        this.motion.cover.formats.medium.url
      )
      mediumBackground.addEventListener('load', () => {
        this.background = mediumBackground.src
      })
    }
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
      text-align center
  &:hover .title
    opacity 1

@media (max-width: 1024px)
  .creation
    width 32%

@media (max-width: 768px)
  .creation
    width 100%
    &:nth-child(3n)
      transform translateY(0%)
    &:nth-child(3n+1)
      transform translateY(0%)
</style>
