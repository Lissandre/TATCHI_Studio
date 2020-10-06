<template>
  <div class="agencyPictures">
    <div>
      <img src="~assets/images/pic1.png" alt="" />
    </div>
    <div>
      <img src="~assets/images/pic2.png" alt="" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.agencyPictures
  margin-top 300px
  display flex
  justify-content space-between
  width 100%
  & div
    &:first-child
      width 59%
    &:last-child
      width 39%
    & img
      width 100%
</style>
