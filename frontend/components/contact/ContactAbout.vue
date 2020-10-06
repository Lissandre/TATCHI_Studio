<template>
  <div class="contactTexts">
    <div>
      <p>Qui sommes-nous</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </p>
    </div>
    <div>
      <p>Contactez-nous</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla
      </p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.contactTexts
  margin-top 500px
  & div
    display flex
    justify-content space-between
    margin-bottom 50px
p
  &:first-child
    color #d0d0d0
    line-height 40px
    font-size 20px
  &:last-child
    color #808080
    line-height 40px
    font-size 20px
    width 80%
</style>
