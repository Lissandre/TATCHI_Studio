<template>
  <div>
    <div class="video">
      <client-only>
        <vueVimeoPlayer
          ref="playerProject"
          :video-id="getMotionId"
          :player-height="height"
          :player-width="width"
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
      options: {},
      playerReady: false,
    }
  },
  computed: {
    getMotionId() {
      return this.motionId
    },
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
