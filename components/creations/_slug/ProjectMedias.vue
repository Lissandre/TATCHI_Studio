<template>
  <div>
    <div class="medias">
      <div
        v-for="(media, indexMedias) in medias"
        :key="indexMedias"
        class="mediasRow"
      >
        <div
          v-for="(image, indexImage) in media.medias"
          :key="indexImage"
          ref="media"
          class="media"
          :class="`${media.medias.length}`"
          @click="modale(media.medias[indexImage].formats.large.url)"
        >
          <img
            v-if="media.medias.length === 1"
            class="oneImage"
            :src="getStrapiMedia(media.medias[indexImage].formats.large.url)"
            alt=""
            loading="lazy"
          />
          <img
            v-else
            :src="getStrapiMedia(media.medias[indexImage].formats.medium.url)"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <ProjectMediasModale :url-modale="urlModale" :media-list="mediaList" />
  </div>
</template>

<script>
import { getStrapiMedia } from '@/utils/medias'

export default {
  name: 'ProjectMedias',
  props: {
    medias: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      mediaList: [],
      urlModale: '',
    }
  },
  mounted() {
    this.$refs.media.forEach((media) => {
      if (!media.classList.contains('1') && !media.classList.contains('2')) {
        media.style.height = `${media.offsetWidth}px`
      }
    })
    window.addEventListener('resize', () => {
      this.$refs.media.forEach((media) => {
        if (!media.classList.contains('1') && !media.classList.contains('2')) {
          media.style.height = `${media.offsetWidth}px`
        }
      })
    })
    this.medias.forEach((media) => {
      media.medias.forEach((pic) => {
        this.mediaList.push(pic.formats.large.url)
      })
    })
  },
  methods: {
    getStrapiMedia,
    modale(url) {
      this.urlModale = ''
      this.urlModale = this.getStrapiMedia(url)
    },
  },
}
</script>

<style lang="stylus" scoped>
.mediasRow
  margin-top 50px
  display flex
  width 100%

.media
  overflow hidden
  margin 0 10px
  width 100%
  display flex
  justify-content center
  align-items center
  cursor pointer
img.oneImage
  min-width 100%
</style>
