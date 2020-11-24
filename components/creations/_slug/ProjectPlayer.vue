<template>
  <div class="container">
    <div class="video">
      <client-only>
        <vueVimeoPlayer
          ref="playerProject"
          :video-id="getMotionId"
          :player-height="height"
          :player-width="width"
          :options="options"
          @ready="onReady"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  name: 'ProjectPlayer',
  components: {
    vueVimeoPlayer,
  },
  props: {
    motionId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      height: 630,
      width: 1124,
      options: {
        color: 'ffffff',
        byline: false,
        title: false,
        portrait: false,
      },
      playerReady: false,
    }
  },
  computed: {
    getMotionId() {
      return this.motionId
    },
  },
  mounted() {
    this.width = document.querySelector('.content').offsetWidth
    this.height = this.width / (16 / 9)
  },
  methods: {
    onReady() {
      this.playerReady = true
    },
    play() {
      this.$refs.playerProject.play()
    },
    stop() {
      this.$refs.playerProject.stop()
    },
  },
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content center
  margin-bottom 150px
.video
  position relative
</style>
