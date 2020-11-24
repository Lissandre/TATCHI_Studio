<template>
  <div class="videoContainer">
    <h2>Un nouveau chapitre commence ici.</h2>
    <div class="centerContainer">
      <div class="video">
        <client-only>
          <vueVimeoPlayer
            ref="player"
            :video-id="videoID"
            :player-height="height"
            :player-width="width"
            :options="options"
            @ready="onReady"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { vueVimeoPlayer } from 'vue-vimeo-player'
export default {
  name: 'IndexPlayer',
  components: {
    vueVimeoPlayer,
  },
  data() {
    return {
      videoID: '473857681',
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
  created() {
    this.$root.$refs.play = this
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
      this.$refs.player.play()
    },
    stop() {
      this.$refs.player.stop()
    },
  },
}
</script>

<style lang="stylus" scoped>
.videoContainer
  margin-bottom 150px
.centerContainer
  display flex
  justify-content center
  margin-bottom 150px
.video
  position relative
</style>
