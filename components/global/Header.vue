<template>
  <nav id="nav">
    <nuxt-link to="/">
      <img src="~assets/images/logos/tatchi.svg" alt="" />
    </nuxt-link>
    <ul>
      <li>
        <nuxt-link to="/creations">
          Créations
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">
          Contact
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="stylus">
#nav
  z-index 10
  display flex
  justify-content space-between
  padding 2% 10%
  margin 2% 0 6% 0
  position sticky
  top 0
  & img
    height 42px
  & ul
    list-style none
    & li
      display inline-block
      text-transform uppercase
      &:first-child
        margin-right 20px
      &:last-child
        margin-left 20px
      & a
        color #d0d0d0
        transition 0.12s color linear
        will-change color
        &:hover
          color #000000

@media (min-width: 320px) and (max-width: 480px)
  #nav
    padding 2% 4%
    align-items center
    & ul li
      &:first-child
        margin-right 10px
      &:last-child
        margin-left 10px
</style>
