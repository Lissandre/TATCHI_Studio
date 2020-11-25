<template>
  <div class="topPageHome">
    <IndexTopParallax />
    <h1>Captivez votre audience.</h1>
    <p>
      Chez <strong>Tatchi Studio</strong>, on accompagne les professionnels<br />
      dans la conception de vidéos d'animation très spéciales.
    </p>
    <p>
      Et c'est avec ces vidéos que vous allez pouvoir accrocher votre audience.
    </p>
    <button @click="play(), scrollVideo()">
      La preuve
    </button>
    <p class="sub">
      Spécialisés dans la réalisation de Motion Design 2D et 3D
    </p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="249.751"
      height="54.042"
      viewBox="0 0 249.751 54.042"
    >
      <defs>
        <style>
          .a,
          .b {
            fill: gray;
          }
          .a {
            font-size: 9px;
            font-family: 'Nexa';
            font-weight: 300;
            letter-spacing: 0.1em;
          }
        </style>
      </defs>
      <text class="a" transform="translate(78.46 52.042)">
        <tspan x="0" y="0">STUDIO</tspan>
      </text>
      <g transform="translate(0 0)">
        <path
          class="b"
          d="M353.289,377.079a6.825,6.825,0,1,0,6.822,6.827A6.834,6.834,0,0,0,353.289,377.079Z"
          transform="translate(-326.837 -357.453)"
        />
        <path
          class="b"
          d="M340.664,360.13a12.793,12.793,0,1,1-14.2-14.2v-13.7h0a26.445,26.445,0,1,0,27.9,27.9h-13.7Z"
          transform="translate(-301.51 -332.185)"
        />
        <path
          class="b"
          d="M365.516,332.126v13.655h11.3v11.3h13.655v-11.3h11.3V332.126Z"
          transform="translate(-337.572 -332.126)"
        />
      </g>
      <g transform="translate(78.948 13.473)">
        <path
          class="b"
          d="M491.531,365.479H482.34v-1.743h20.344v1.743h-9.191v23.65h-1.962Z"
          transform="translate(-482.34 -363.409)"
        />
        <path
          class="b"
          d="M636.972,365.479h-9.191v-1.743h20.344v1.743h-9.191v23.65h-1.962Z"
          transform="translate(-564.284 -363.409)"
        />
        <path
          class="b"
          d="M725.006,385.183A13.093,13.093,0,0,1,715.742,389c-8.573,0-13.042-5.994-13.078-12.86-.072-6.793,4.359-13.15,13.078-13.15a13.092,13.092,0,0,1,9.264,3.814l-1.344,1.163a11.127,11.127,0,0,0-7.92-3.233c-7.411,0-11.225,5.231-11.189,11.334.073,5.958,3.851,11.116,11.189,11.116a11.366,11.366,0,0,0,7.956-3.233Z"
          transform="translate(-606.473 -362.987)"
        />
        <path
          class="b"
          d="M805.446,389.082V377.53h-16.2v11.552h-1.962v-25.43h1.962v12.1h16.2v-12.1h1.962v25.43Z"
          transform="translate(-654.149 -363.362)"
        />
        <path
          class="b"
          d="M869.156,389.082v-25.43h1.925v25.43Z"
          transform="translate(-700.278 -363.362)"
        />
        <path
          class="b"
          d="M567.862,363.652h-2.143l-11.407,25.43h2.107l2.761-6.248.763-1.816,6.829-15.476,6.83,15.476.763,1.816,2.8,6.248h2.107Z"
          transform="translate(-522.89 -363.362)"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'
export default {
  name: 'IndexTop',
  methods: {
    scrollVideo() {
      animateScrollTo(document.querySelector('.videoContainer'), {
        minDuration: 1200,
      })
    },
    play() {
      this.$root.$refs.play.play()
    },
  },
}
</script>

<style lang="stylus" scoped>
.topPageHome
  text-align center
  color #808080
  width 100%
  display flex
  flex-direction column
  justify-content flex-end
  align-items center
  margin-bottom 16%
h1
  font-size 56px
  font-weight 200
  margin-bottom 50px
p
  font-size 26px
  font-weight normal
  margin-bottom 50px
  & strong
    color #575757
    font-weight normal
    text-transform uppercase
  &.sub
    font-size 16px
    margin-bottom 90px
button
  background #575757
  border none
  padding 15px 90px
  border-radius 5px
  box-shadow 0px 13px 26px rgba(0, 0, 0, 0.482)
  margin-bottom 96px
  color #d0d0d0
  font-weight bold
  font-size 16px
  cursor pointer
  outline none
  transition 0.42s transform ease
  &:hover
    transform scale(0.96)
img
  height 54px

@media (max-width: 768px)
  h1
    font-size 50px
  p
    font-size 20px
    margin-bottom 20px
    &.sub
      margin-bottom 30px
  button
    margin-top 50px
</style>
