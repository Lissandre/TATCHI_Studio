<template>
  <div>
    <img src="@/assets/images/logos/alsei.svg" alt="" />
    <img src="@/assets/images/logos/mz.svg" alt="" />
    <img src="@/assets/images/logos/allianz.svg" alt="" />
    <img src="@/assets/images/logos/metropolebordeaux.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'IndexClients',
}
</script>

<style lang="stylus" scoped>
div
  display flex
  justify-content space-between
  margin-bottom 16%

@media (max-width: 1024px)
  div
    flex-wrap wrap
    justify-content space-around
  img
    margin 12px
</style>
