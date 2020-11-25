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
        <svg
          id="Calque_1"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 249.8 54"
          style="enable-background: new 0 0 249.8 54;"
          xml:space="preserve"
        >
          <text transform="matrix(1 0 0 1 78.46 52.042)" class="st0 st1 st2">
            STUDIO
          </text>
          <g transform="translate(0 0)">
            <path
              class="st0"
              d="M26.5,19.6c-3.8,0-6.8,3.1-6.8,6.8c0,3.8,3.1,6.8,6.8,6.8c3.8,0,6.8-3.1,6.8-6.8c0,0,0,0,0,0
      C33.3,22.7,30.2,19.6,26.5,19.6z"
            />
            <path
              class="st0"
              d="M39.2,27.9C38.3,35,32,40,25,39.2c-7-0.8-12-7.2-11.2-14.2c0.7-5.9,5.3-10.5,11.2-11.2V0l0,0
      C10.4,0.9-0.8,13.4,0,27.9s13.3,25.7,27.9,24.9c13.4-0.8,24.1-11.5,24.9-24.9L39.2,27.9L39.2,27.9z"
            />
            <path class="st0" d="M27.9,0v13.7h11.3V25h13.7V13.7h11.3V0H27.9z" />
          </g>
          <g transform="translate(78.948 13.473)">
            <path
              class="st0"
              d="M9.2,2.1H0V0.3h20.3v1.7h-9.2v23.6h-2L9.2,2.1z"
            />
            <path
              class="st0"
              d="M72.7,2.1h-9.2V0.3h20.3v1.7h-9.2v23.6h-2L72.7,2.1z"
            />
            <path
              class="st0"
              d="M118.5,22.2c-2.5,2.5-5.8,3.8-9.3,3.8c-8.6,0-13-6-13.1-12.9C96.1,6.4,100.5,0,109.3,0c3.5,0,6.8,1.4,9.3,3.8
      L117.2,5c-2.1-2.1-5-3.3-7.9-3.2C101.9,1.7,98,7,98.1,13.1c0.1,6,3.9,11.1,11.2,11.1c3,0,5.8-1.2,8-3.2L118.5,22.2z"
            />
            <path
              class="st0"
              d="M151.3,25.7V14.2h-16.2v11.6h-2V0.3h2v12.1h16.2V0.3h2v25.4H151.3z"
            />
            <path class="st0" d="M168.9,25.7V0.3h1.9v25.4H168.9z" />
            <path
              class="st0"
              d="M45,0.3h-2.1L31.4,25.7h2.1l2.8-6.2l0.8-1.8l6.8-15.5l6.8,15.5l0.8,1.8l2.8,6.2h2.1L45,0.3z"
            />
          </g>
        </svg>
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
.st0
  fill #232323
  color #232323
.st1
  font-family 'Nexa'
  font-weight 300
.st2
  font-size 9px

div
  z-index 100
  width 100%
  display flex
  justify-content center
  align-items center
svg
  width 80%
  z-index 150
</style>
