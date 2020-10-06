<template>
  <div class="videoContainer">
    <h2>Un nouveau chapitre commence ici.</h2>
    <div class="centerContainer">
      <div class="video">
        <div class="trickVideo"></div>
        <client-only>
          <vueVimeoPlayer
            ref="player"
            :video-id="videoID"
            :player-height="height"
            :player-width="width"
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
      videoID: '154361196',
      height: 630,
      width: 1124,
      options: {},
      playerReady: false,
    }
  },
  created() {
    this.$root.$refs.play = this
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
  background #fafafa
  height 630px
  width 1124px
  position relative
.trickVideo
  position absolute
  top 0
  left 0
  height 100%
  width 100%
  pointer-events none
</style>
