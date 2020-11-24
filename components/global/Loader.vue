<template lang="html">
  <div v-if="loading" class="PageTransition">
    <div
      :class="[
        'PageTransition__background',
        { 'anim-in': animIn },
        { 'anim-out': animOut },
      ]"
    >
      <div
        :class="[
          'PageTransition__logo',
          { 'anim-in': animIn },
          { 'anim-out': animOut },
        ]"
      >
        <img
          src="~assets/images/logos/loadTatchi.svg"
          alt=""
          class="tatchiStudioLogo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    animIn: false,
    animOut: false,
  }),
  methods: {
    start() {
      this.loading = true
      this.animIn = true
    },
    finish() {
      setTimeout(() => {
        this.animIn = false
        this.animOut = true
      }, 700)
      setTimeout(() => {
        this.loading = false
        this.animOut = false
      }, 1500)
    },
  },
}
</script>

<style lang="stylus" scoped>
div
  width 100%
  display flex
  justify-content center
  align-items center
img
  width 80%
</style>
